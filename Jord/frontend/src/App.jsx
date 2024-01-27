import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { useGLTF } from '@react-three/drei'
import { OrbitControls,} from '@react-three/drei'

import Nav from './Navigation/Nav'
import ProductCat from './Product/ProductCat'
import Products from './Products/Products'

import { useEffect } from 'react'
import "./index.css"




function Shoe({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/aka.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[0.4, 0.9, -1.7]} scale={3.5} />
      </group>
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadoe-camera-far={50}
        shadoe-camera-left={-10}
        shadoe-camera-right={10}
        shadoe-camera-top={10}
        shadoe-camera-bottom={-10}
      />
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  )
}

export default function App() {

  useEffect(() => {
    console.log("this is app")
  }, [])
  return (
    <div className="home">
      <Nav />
      <span class="threename" >AIR FORCE</span>
      <div className="three">
        <Canvas colorManagement shadowMap camera={{ position: [-5, 0, 10], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} rotateSpeed={0.3} enablePan={false} />
          <Suspense fallback={null}>
            <directionalLight intensity={1} position={[100, 0, 0]} />
            <directionalLight intensity={1} position={[0, 100, 0]} />
            <Shoe />
          </Suspense>
        </Canvas>
      </div>

      <div className="home-container">
        <div className="home-banner">
          <span className="threesixty">
            <span id="akat">
              AKAT <span style={{ color: 'purple', marginLeft: '-40px' }}>SUKI</span>
            </span>
          </span>
          <span className="threesub">
            Discover the story behind <br />
            the sharingan
          </span>
        </div>
        <div className="home-yt" style={{  background: '#201c1c'}}>
          <iframe
            width="92%"
            height="576"
            src="https://www.youtube.com/embed/V9fsOaa97F4?si=YhIvnBV7KxcpKNsj&amp;controls=0&rel=0"
            title="Never Settle, Never Done | Nike"
            rel="0"
            frameborder="0"
            allow="autoplay;"
            allowfullscreen ></iframe>
        </div>
        <div className="products" style={{  background: '#201c1c'}}>
          <div className="Products-rows">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}
