
import React, {useState} from 'react';
// import { Scene, ConeGeometry, PerspectiveCamera, WebGLRenderer, MeshNormalMaterial, Mesh } from 'three';
import * as THREE from 'three';
import './Input.css';


function Cone () {
const [hight, setHight] = useState('')
const [radius, setRadius] = useState('')
const [segments, setSegments] = useState('')


// const handleSubmit = event => {
//   event.preventDefault()
//   console.log('data', hight, radius )
// }

const scene = new THREE.Scene();
const geometry = new THREE.ConeGeometry( radius, hight, segments );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
const material = new THREE.MeshNormalMaterial();

const renderer = new THREE.WebGLRenderer();

renderer.setSize(800, 500 );

document.body.appendChild( renderer.domElement );


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('threejs').appendChild(renderer.domElement);

const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 40;

function render() {
  requestAnimationFrame( render );
  cone.rotation.x += 0.005;
  cone.rotation.y += 0.005; 
  cone.rotation.z += 0.005;        
  renderer.render( scene, camera );
}


return(
  <div className='form_wrap'>  
    <form >        
          Высота:
            <input 
             type="text"
             placeholder="hight"  
             value={hight}
             onChange={e => setHight(e.target.value)}           
              />
          Радиус:
            <input
             type="text"
             placeholder="R"
             value={radius}
             onChange={e => setRadius(e.target.value)}              
              />
               Кол-во сегментов:
            <input
             type="text"
             placeholder="segments"
             value={segments}
             onChange={e => setSegments(e.target.value)}              
              />      
    </form> 
    <button onClick={render} className='btn' >Отрисовать</button>   
</div>
  );  
}  
  export default Cone;

 