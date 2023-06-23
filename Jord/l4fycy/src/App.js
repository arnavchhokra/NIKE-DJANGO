import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useGLTF } from '@react-three/drei'
import { OrbitControls, Html, draco } from '@react-three/drei'
import Nav from './Navigation/Nav'
import ProductCat from './Product/ProductCat'
import Products from './Products/Products'


function Shoe({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/aka.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[0.4, 0.9, -1.7]} scale={4.5} />
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
  return (


    
    <div className="home">
              <Nav />

      <div className="home-container">
        <div className="nav">

        </div>
        <div className="home-banner">
          <span class="threesixty">
            <span id="akat">AKAT <span style={{color:"purple", marginLeft:"-40px"}}>SUKI</span></span>
          </span>
          <span class="threesub">
            Discover the story behind <br />
            the sharingan
          </span>
          <span class="threename">AIR FORCE</span>

          <div className="three">
            <Canvas colorManagement shadowMap camera={{ position: [-5, 0, 10], fov: 40 }}>
              <ambientLight intensity={0.5} />
              <OrbitControls enableZoom={false} rotateSpeed={0.3} enablePan={false} />
              <Suspense fallback={null}>
                <directionalLight intensity={1} position={[100, 0, 0]} />
                <directionalLight intensity={1} position={[0, 100, 0]} />
                <Shoe />
              </Suspense>
            </Canvas>
          </div>
          <div className="home-banner-bottom"></div>
        </div>
        <script></script>
        <div class="changing">
          <span className="changing-text">
            <p>
              Air <span id="spin"></span>
            </p>
          </span>
        </div>
        <div className="Liq">
          <div class="Liq-container">
            <h1 class="Liq-text">COLLECTION</h1>
            <div className="product-category-row">
              <ProductCat />
              <ProductCat />
              <ProductCat />
            </div>
          </div>
        </div>
        <div className="home-yt">
          <iframe
            width="100%"
            height="576"
            src="https://www.youtube.com/embed/PZIqV7wNyyU?autoplay=1&controls=0&rel=0"
            title="Never Settle, Never Done | Nike"
            rel="0"
            frameborder="0"
            allow="autoplay;"
            allowfullscreen></iframe>
        </div>
        <div className="products">
          <div className="Products-rows">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}
