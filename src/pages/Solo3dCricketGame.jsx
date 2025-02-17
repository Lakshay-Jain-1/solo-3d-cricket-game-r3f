import { Canvas } from "@react-three/fiber"
import Pitch from "../components/Pitch.jsx"
import { Physics } from "@react-three/rapier"
import Bat from "../components/Bats.jsx"
import Wicket from '../components/Wicket.jsx'
import Ground from '../components/Ground.jsx'
import { RecoilRoot } from 'recoil'
import Ball from '../components/Ball.jsx'
import Bowling from '../components/Bowling.jsx'
import {  Stars, Sky,Environment } from '@react-three/drei'


function Solo3dCricketGame() {

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

export default Solo3dCricketGame
