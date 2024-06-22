
import './App.css'
import * as THREE from "three"
import { Html, useKeyboardControls } from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { MeshCollider, RigidBody } from "@react-three/rapier"
import { useState, useRef } from "react"
import { Model } from './Cricket_batsports'

function Bat() {
    const [reset, setReset] = useState()

    function reseted() {
        setReset(Math.random())
    }

    return (
        <>
            <Html as="div" position={[-8,4.5,0]}>
                <button  onClick={() => reseted()}>
                    Reset Bat
                </button>
            </Html>


            <Model key={reset} />




        </>
    )
}

export default Bat
