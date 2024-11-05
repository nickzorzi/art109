// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
//import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

let scene, camera, renderer, cube, sphere, controls;

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
    
    const geometry = new THREE.TorusKnotGeometry( 10, 1, 100, 16 );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    const texture = new THREE.TextureLoader().load('../textures/ice002_1K-JPG_Color.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const geometry2 = new THREE.SphereGeometry( 2, 32, 16 );
    const texture2 = new THREE.TextureLoader().load('../textures/grasslight-big.jpg');
    const material2 = new THREE.MeshBasicMaterial( { map: texture2 } ); 
    sphere = new THREE.Mesh( geometry2, material2 );
    scene.add( sphere );

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    //controls = new OrbitControls(camera, renderer.domElement);
    // const loader = new GLTFLoader(); // to load 3d models

    camera.position.z = 10;

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

    if (cube && sphere) {
        cube.rotation.x = scrollY * .001;
        sphere.rotation.y = scrollY * .001;
    }

    //controls.update();

	renderer.render( scene, camera );
}

init();
renderer.setAnimationLoop( animate );


// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene