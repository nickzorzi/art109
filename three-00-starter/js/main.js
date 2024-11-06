// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

let scene, camera, renderer, cube, sphere, controls, midnight, dog, particlesMesh;

// let sceneContainer = document.querySelector("#scene-container");

let mixer; //animation for dog asset

let actionPant, actionTail; //animation actions

const clock = new THREE.Clock();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x015220);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1,1,5);
    scene.add(light);

    // camera = new THREE.PerspectiveCamera(75, sceneContainer.clientHeight / sceneContainer.clientWidth, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // renderer.setSize(sceneContainer.clientHeight, sceneContainer.clientWidth);
    // sceneContainer.appendChild(renderer.domElement);

    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg")
    })
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 50;
    renderer.render(scene, camera);

    //controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/models_midnight_snack.glb', function (gltf) {
        midnight = gltf.scene;
        scene.add(midnight);
    })

    loader.load('assets/dog_shiny.gltf', function (gltf) {
        dog = gltf.scene;
        scene.add(dog);

        mixer = new THREE.AnimationMixer(dog);
        const clips = gltf.animations;

        const clipPant = THREE.AnimationClip.findByName(clips, 'pant');
        actionPant = mixer.clipAction(clipPant);
        //actionPant.play();

        const clipTail = THREE.AnimationClip.findByName(clips, 'tail');
        actionTail = mixer.clipAction(clipTail);
        actionTail.play();

        // clips.forEach(function(clip) {
        //     const action = mixer.clipAction(clip);
        //     action.play();
        // });
    })

    const geometry = new THREE.TorusKnotGeometry( 10, 1, 100, 16 );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    //const texture = new THREE.TextureLoader().load('textures/ice002_1K-JPG_Color.jpg');
    //const material = new THREE.MeshBasicMaterial({ map: texture });
    const material = new THREE.PointsMaterial({
        size: 0.005
    });

    cube = new THREE.Points( geometry, material );
    scene.add( cube );

    const geometry2 = new THREE.SphereGeometry( 2, 32, 16 );
    const texture2 = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const material2 = new THREE.MeshBasicMaterial( { map: texture2 } ); 
    sphere = new THREE.Mesh( geometry2, material2 );
    scene.add( sphere );

    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCnt = 50000;

    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
        //posArray[i] = Math.random()
        //posArray[i] = Math.random() - 0.5
        posArray[i] = (Math.random() - 0.5) * 150
    }

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 'yellow'
    });

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // camera.position.z = 5;
}

let mouseIsDown

document.querySelector("body").addEventListener("mousedown", () => {
    actionPant.play();
    actionPant.paused = false;
    mouseIsDown = true;
    console.log("pressed");
});

document.querySelector("body").addEventListener("mouseup", () => {
    actionPant.paused = true;
    mouseIsDown = false;
    //actionPant.stop();
    console.log("unpressed");
});

document.querySelector("body").addEventListener("mousemove", () => {
    if (mouseIsDown == true) {
        console.log("moved mouse");
        sphere.rotation.x += .5;
    }
});

// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);



// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
// const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader(); // to load 3d models


// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    if (camera) {
        camera.position.z = t * 1;
        camera.position.x = t * 0.01;
    }
}

document.body.onscroll = moveCamera;

moveCamera();

document.addEventListener("mousemove", animateParticles);
let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function animate() {

    if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    if (sphere) {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        sphere.position.x = Math.sin(Date.now() / 400) * 5;
        sphere.position.y = Math.sin(Date.now() / 400) * 5;
        sphere.position.z = Math.sin(Date.now() / 400) * 5;
    }

    if (midnight) {
        // midnight.rotation.x += 0.01;
        // midnight.rotation.y += 0.01;

        midnight.rotation.y = Math.sin(Date.now() / 1000) * 5;
    }

    const elapsedTime = clock.getElapsedTime();

    if (particlesMesh) {
        particlesMesh.rotation.y = -mouseY * (elapsedTime * 0.001);
        particlesMesh.rotation.x = -mouseX * (elapsedTime * 0.001);
    }

    if (mixer) {
        mixer.update(clock.getDelta());
    }

    //controls.update();

	renderer.render( scene, camera );
}

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime();

//     if (particlesMesh) {
//         particlesMesh.rotation.y = mouseY * (elapsedTime);
//     }

//     if (renderer) {
//         renderer.render(scene, camera);
//     }

//     window.requestAnimationFrame(tick);
// }

// tick();

function onWindowResize() {
    // camera.aspect = sceneContainer.clientHeight / sceneContainer.clientWidth;
    // camera.updateProjectionMatrix();
    // renderer.setSize(sceneContainer.clientHeight, sceneContainer.clientWidth);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
renderer.setAnimationLoop( animate );
