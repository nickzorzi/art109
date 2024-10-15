// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

let scene, camera, renderer, cube, sphere, controls;

function init() {
    scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1,1,5);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/models_midnight_snack.glb', function (gltf) {
        const midnight = gltf.scene;
        scene.add(midnight);
    })

    const geometry = new THREE.TorusKnotGeometry( 10, 1, 100, 16 );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    const texture = new THREE.TextureLoader().load('textures/ice002_1K-JPG_Color.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const geometry2 = new THREE.SphereGeometry( 2, 32, 16 );
    const texture2 = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const material2 = new THREE.MeshBasicMaterial( { map: texture2 } ); 
    const sphere = new THREE.Mesh( geometry2, material2 );
    scene.add( sphere );

    camera.position.z = 5;
}

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

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();

	renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
renderer.setAnimationLoop( animate );
