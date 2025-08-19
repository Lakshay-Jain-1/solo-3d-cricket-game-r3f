import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { RecoilRoot } from 'recoil'
import {  Sky } from '@react-three/drei'
import { lazy, useEffect } from "react"


const Pitch = lazy(() => import("../components/Pitch.jsx"));
const Bat = lazy(() => import("../components/Bat.jsx"));
const Wicket = lazy(() => import("../components/Wicket.jsx"));
const Ground = lazy(() => import("../components/Ground.jsx"));
const Ball = lazy(() => import("../components/Ball.jsx"));
const Bowling = lazy(() => import("../components/Bowling.jsx"));


function Game() {

  useEffect(()=>{
    var w = window.innerWidth;
    console.log(w)
  },[])

  return (
    <>
      <Canvas shadows={true} camera={{ position: [0, 0, -6] }} frameloop='demand'>
        <directionalLight castShadow position={[5, 0, 0]} intensity={4} />
        <ambientLight intensity={0.5} />
        <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
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
export default Game
