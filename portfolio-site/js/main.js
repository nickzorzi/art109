// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
//import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

let scene, camera, renderer, cube, cube2, cube3, sphere, controls, particlesMesh;

const clock = new THREE.Clock();

function init() {

    // ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1,1,5);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector("#three-container").appendChild(renderer.domElement);

    //knot "cube"
    
    const geometry = new THREE.TorusKnotGeometry( 10, 0.5, 250, 32 );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const texture = new THREE.TextureLoader().load('../textures/ice002_1K-JPG_Color.jpg');
    // const material = new THREE.MeshBasicMaterial({ map: texture });
    const material = new THREE.PointsMaterial({
        size: 0.01,
        color: '#f6f930'
    });
    cube = new THREE.Points( geometry, material );
    // cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //cube 2

    const geometry3 = new THREE.TorusKnotGeometry( 15, 1, 400, 48, 2, 1 );
    const material3 = new THREE.PointsMaterial({
        size: 0.01,
        color: '#f6f930'
    });
    cube2 = new THREE.Points( geometry3, material3 );
    cube2.rotateY(2);
    cube2.rotateX(5);
    cube2.rotateZ(5);
    scene.add( cube2 );

    //cube 3

    const geometry4 = new THREE.TorusKnotGeometry( 20, 1.5, 550, 64, 4, 3 );
    const material4 = new THREE.PointsMaterial({
        size: 0.01,
        color: '#4ea5d9'
    });
    cube3 = new THREE.Points( geometry4, material4 );
    cube2.rotateY(5);
    cube3.rotateX(2);
    cube3.rotateZ(2);
    scene.add( cube3 );

    //sphere

    // const geometry2 = new THREE.SphereGeometry( 2, 32, 16 );
    // // const texture2 = new THREE.TextureLoader().load('../textures/grasslight-big.jpg');
    // // const material2 = new THREE.MeshBasicMaterial( { map: texture2 } ); 
    // const material2 = new THREE.PointsMaterial({
    //     size: 0.01,
    //     color: 'red'
    // });
    // // sphere = new THREE.Mesh( geometry2, material2 );
    // sphere = new THREE.Points( geometry2, material2 );
    // scene.add( sphere );

    //space particles

    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCnt = 10000;

    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
        //posArray[i] = Math.random()
        //posArray[i] = Math.random() - 0.5
        posArray[i] = (Math.random() - 0.5) * 150
    }

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 'white'
    });

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    //controls = new OrbitControls(camera, renderer.domElement);
    // const loader = new GLTFLoader(); // to load 3d models

    camera.position.z = 10;

}

document.addEventListener("mousemove", animateParticles);
let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function animate() {

    let scrollY = window.scrollY;
    //let percentScrolled = window.scrollY / document.body.scrollHeight *100;

    // if (cube) {
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;
    // }

    // if (sphere) {
    //     sphere.rotation.x += 0.01;
    //     sphere.rotation.y += 0.01;
    // }

    const elapsedTime = clock.getElapsedTime();

    if (cube && cube2) {
        // cube.rotation.x = scrollY * .001;
        // cube2.rotation.x = scrollY * .001;
        // cube3.rotation.x = scrollY * .001;
        // sphere.rotation.y = scrollY * .001;

        cube.rotation.x = (-mouseX * 0.05) * (elapsedTime * 0.001);
        cube.rotation.y = (mouseY * 0.05) * (elapsedTime * 0.001);

        cube2.rotation.x = (-mouseX * 0.05) * (elapsedTime * 0.001);
        cube2.rotation.y = (-mouseY * 0.05) * (elapsedTime * 0.001);

        cube3.rotation.x = (mouseX * 0.05) * (elapsedTime * 0.001);
        cube3.rotation.y = (-mouseY * 0.05) * (elapsedTime * 0.001);

        // sphere.rotation.x = (mouseX * 0.05) * (elapsedTime * 0.001);
        // sphere.rotation.y = (mouseY * 0.05) * (elapsedTime * 0.001);
    }

    if (particlesMesh) {
        particlesMesh.rotation.y = (mouseX * 0.05) * (elapsedTime * 0.001);
        particlesMesh.rotation.x = (mouseY * 0.05) * (elapsedTime * 0.001);
    }

    //controls.update();

	renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect =  window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
renderer.setAnimationLoop( animate );


// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene