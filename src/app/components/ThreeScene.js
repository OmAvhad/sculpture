'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';

const ThreeScene = () => {
  const {houseObject, setHouseObject} = useContext(HouseContext); // Initial color
  const scene = useRef(null);
  const houseMaterial = useRef(null); // Store a ref to the material
  const houseGeometry = useRef(null); // Store a ref to the geometry

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
      
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize((window.innerWidth-250), (window.innerHeight-100));
    
    // Create Orbit Controls
    const controls = new OrbitControls( camera, renderer.domElement );

    // Set the background color of the renderer
    renderer.setClearColor(0xCFF5F0); // Replace with the desired color code

    houseGeometry.current = new THREE.BoxGeometry( houseObject.width, houseObject.height, houseObject.depth ); 
    houseMaterial.current = new THREE.MeshBasicMaterial( { color: houseObject.color } ); 
    const house = new THREE.Mesh(houseGeometry.current, houseMaterial.current);
    scene.add(house);

    camera.position.z = 5;
    controls.update();

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
  
    const container = document.getElementById( 'canvas' );
    container.appendChild( renderer.domElement );

    if ( WebGL.isWebGLAvailable() ) {
      // Initiate function or other initializations here
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById( 'container' ).appendChild( warning );
    }

    // Clean up the renderer on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (houseMaterial.current) {
      houseMaterial.current.color.set(houseObject.color);
    }
    // if (houseGeometry.current) {
    //   houseGeometry.current.scale(houseObject.width, houseObject.height, houseObject.depth)
    // }
  }, [houseObject]);

  return null; // Three.js will render directly to the DOM
};

export default ThreeScene;
