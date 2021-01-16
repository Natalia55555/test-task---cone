
import React, {useState} from 'react';
import { Scene, ConeBufferGeometry, PerspectiveCamera, WebGLRenderer, MeshNormalMaterial, Mesh } from 'three';
import './Input.css';


function Cone () {
const [hight, setHight] = useState('')
const [radius, setRadius] = useState('')
const [segments, setSegments] = useState('')


// const handleSubmit = event => {
//   event.preventDefault()
//   console.log('data', hight, radius )
// }

const scene = new Scene();
const geometry = new ConeBufferGeometry( radius, hight, segments );
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
const material = new MeshNormalMaterial();

const renderer = new WebGLRenderer();

renderer.setSize(800, 500 );

document.body.appendChild( renderer.domElement );


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('threejs').appendChild(renderer.domElement);

const cone = new Mesh( geometry, material );
scene.add( cone );

camera.position.z = 40;

function render() {
  requestAnimationFrame( render );
  cone.rotation.x += 0.005;
  cone.rotation.y += 0.005; 
  cone.rotation.z += 0.005;        
  renderer.render( scene, camera );
}
render();

return(
  <div>
  <div className='cone_wrapper' id='cone_wrapper'></div>
    <form className='form'>        
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
                {/* <button 
    type='submit'> Отправить
      </button>                */}
    </form> 
   
</div>
  );  
}  
  export default Cone;

 