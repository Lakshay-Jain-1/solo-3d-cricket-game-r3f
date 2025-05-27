
import * as THREE from "three"
import { Html, Float } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import { BallCollider, RigidBody } from "@react-three/rapier"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from 'recoil'
import { Ballfollowing, Ballrigid, Bowling } from "../store/BallController"
import { useRef } from "react"
import { Model } from './BallModel'

function Ball() {
  const movement = useRef()
  const Rigid = useRecoilValue(Ballrigid)
  const bowlingvalues = useRecoilValue(Bowling)
  const [follow, setFollow] = useRecoilState(Ballfollowing)
  const positions = useRef()
  const alertMessage = `It is a solo 3D cricket game where you have to bowl and bat yourself.
TO BAT:
- Shift + Left Arrow → Left shot
- Shift + Right Arrow → Right shot
- Shift + Up Arrow → Forward shot

TO BOWL:
- Drag the lever to the right → Spin in the right direction
- Drag the lever to the left → Spin in the left direction`
  useFrame((state) => {
    if (follow) {
      const worldPosition = new THREE.Vector3()
      positions.current?.getWorldPosition(worldPosition)
      state.camera.lookAt(worldPosition)
      setTimeout(() => {
        setFollow(false)
      }, 5000)
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
      <Html as="div" position={[1.9, 3.8, 0]} className="follow">
        <button onClick={() => window.location.replace("https://youtu.be/TDJV_SOHFis")  } 
        style={{ width: "320px",backgroundColor:"lightblue" }} >
          Watch the demo video if you're unable to play the game
        </button>
      </Html>

      <Html as="div" position={[1.9, 4.5, 0]} className="follow">
        <button onClick={() => setFollow(true)} style={{ width: "110px",backgroundColor:"lightblue" }} >
          Follow the ball
        </button>
      </Html>

      <Html as="div" position={[0.4,4.5,0]}>
        <button
          onClick={() => alert(alertMessage)}
          style={{ width:"100px",backgroundColor:"lightblue",height:"48px" }}
        >
          How To Play ?
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
          position={[0.42, 0, -4.5]}>

          <Model />
          <BallCollider args={[0.1]} />
        </Float>}
    </>
  )
}

export default Ball
