
import './App.css'

import { Canvas } from "@react-three/fiber"
import Pitch from "./Pitch.jsx"
import { BallCollider, Physics, RigidBody, CuboidCollider } from "@react-three/rapier"
import Bat from "./Bats.jsx"
import Wicket from './Wicket.jsx'
import Ground from './Ground.jsx'
import { RecoilRoot } from 'recoil'
import Ball from './Ball.jsx'
import Bowling from './Bowling.jsx'
import { OrbitControls, Stars, Sky,Environment } from '@react-three/drei'


function App() {

  return (
    <>
      <Canvas shadows={true} camera={{ position: [0, 0, -6] }} frameloop='demand'>
        <directionalLight castShadow position={[5, 0, 0]} intensity={4} />
        <ambientLight intensity={0.5} />
        <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />

       

          <Environment preset='night' />

          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
          <Physics   >
            <RecoilRoot >
              <Ground />
              <Pitch />
              <Wicket />
              <Bat />
              <Ball />
              <Bowling />
            </RecoilRoot>
          </Physics>
        </Canvas>

      </>
      )
}

      export default App
