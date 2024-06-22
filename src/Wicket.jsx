
import './App.css'
import * as THREE from "three"
import { OrbitControls, useGLTF, Float, DragControls, TransformControls, TrackballControls, PerspectiveCamera } from "@react-three/drei"
import { useThree } from '@react-three/fiber'
import { CuboidCollider, CylinderCollider, MeshCollider, RigidBody, CapsuleCollider } from "@react-three/rapier"
import { useState } from "react"
import { Model } from './Untitled1'

function Wicket() {



    return (

        <>

            <Model />

            <RigidBody type='fixed' colliders={false} position={[0.5,-1,7]}>


                <CuboidCollider
                    args={[0.5, 1, 0.1]}
                    sensor
                    onIntersectionEnter={() => console.log("Out")}
                />
            </RigidBody>






        </>
    )
}

export default Wicket
