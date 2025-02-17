
import * as THREE from "three"
import { BallCollider, ConvexHullCollider, CuboidCollider, CylinderCollider, Physics, RigidBody } from "@react-three/rapier"
import { Circle } from "@react-three/drei"
import { useSetRecoilState } from "recoil"
import { Ballfollowing, Ballrigid } from "../store/BallController"


function Ground() {
        const setFollow = useSetRecoilState(Ballfollowing)
        const setRigid = useSetRecoilState(Ballrigid)

    return (
        <>  



            {/* Ground */}
            <RigidBody type='fixed' restitution={[0]} colliders={"hull"}>
                <mesh receiveShadow position={[0, -2, 0]} scale={12} rotation-x={Math.PI / 2} >

                    <circleGeometry />
                    <meshStandardMaterial side={THREE.DoubleSide} color="brown" />
                </mesh>
            </RigidBody>

            {/* Boundary */}

            <RigidBody type="fixed" colliders={false} onCollisionEnter={() => console.log("YOOOO")} >
                <CylinderCollider
                    args={[12, 12, 12]}
                    sensor
                    onIntersectionExit={() => {
                        console.log("Four") 
                        setRigid(false)
                            }}
                      
                />
            </RigidBody>
        </>
    )
}

export default Ground
