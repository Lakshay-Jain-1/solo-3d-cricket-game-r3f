
import './App.css'
import * as THREE from "three"
import {  Html, Float } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import { BallCollider,  RigidBody } from "@react-three/rapier"
import { useEffect } from "react"
import {  useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Ballfollowing, Ballrigid, Ballspeed, Bowling } from "./store/BallController"
import { useRef } from "react"
import { Model } from './WhiteBallModel'

function Ball() {
  const movement = useRef()

  const Rigid = useRecoilValue(Ballrigid)
  const setRigid = useSetRecoilState(Ballrigid)
  const bowlingvalues = useRecoilValue(Bowling)
  const [follow,setFollow]  = useRecoilState(Ballfollowing)


  const positions = useRef()

  useFrame((state) => {
    
           
       if(follow){
        const worldPosition = new THREE.Vector3()
        positions.current?.getWorldPosition(worldPosition)
        
        state.camera.lookAt(worldPosition)
        console.log("dddd", worldPosition)

        setTimeout(()=>{
         setFollow(false)
        },5000)
       }
      
  })
  





  useEffect(() => {
  
   
    if (bowlingvalues.y < 0) {
      movement.current?.applyImpulse({ x: 0.001, y: -0.01, z: 0.06 })
      movement.current?.addTorque({ x: 0, y: 0, z: 0.003 })
    } else {
      movement.current?.applyImpulse({ x: -0.01, y: -0.01, z: 0.06 })
      movement.current?.addTorque({ x: 0, y: 0, z: -0.003 })
    }






  }, [bowlingvalues])




  return (
    <>

      <Html as="div" position={[-8, 3.5, 0]}>
        <button onClick={() =>setFollow(true)}>
          Follow the balll
        </button>
      </Html>

      {Rigid ?
        <RigidBody
          ref={movement} restitution={[1.3]} position={[1, 1, -5]}
          colliders={false}
          mass={[3]} >
          <mesh ref={positions}> </mesh>
          <Model />
          <BallCollider args={[0.1]} />
        </RigidBody> :

        <Float speed={9} // Animation speed, defaults to 1
          rotationIntensity={5} // XYZ rotation intensity, defaults to 1
          floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          position={[1.5, 0, -4.5]}>
        
          <Model />
          <BallCollider args={[0.1]} />
        </Float>}
    </>
  )
}

export default Ball
