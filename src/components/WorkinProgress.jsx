import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier"
import {  Environment, Text3D, Trail } from '@react-three/drei'
import { Model } from "./Mjolnir"
import {  useEffect } from "react"

function WorkinProgress() {
    useEffect(() => {
        document.querySelector("body").style.backgroundColor = "#454545";
    }, []);

    return (

        <>
            <Environment preset='night' />

            <Physics >
                <RigidBody  colliders="hull">
                    <Trail

                        width={1.5} // Width of the line
                        color={'lightblue'} // Color of the line
                        length={7} // Length of the line
                        decay={1} // How fast the line fades away

                        stride={0} // Min distance between previous and current point
                        interval={1} // Number of frames to wait before next calculation

                        attenuation={(width) => width} // A function to define the width in each point along it.
                    >

                        <Model  position={[-1, 20, 0]} />
                         

                    </Trail>


                </RigidBody>

                <RigidBody restitution={0.3} type="fixed">
                    <CuboidCollider args={[2, 0.2, 0.5]} position={[0, -1, 0]} rotation-x={-Math.PI / 2} />
                </RigidBody>

                <RigidBody position={[0, 3, 0]} colliders="hull">

                    <Text3D scale={0.1} letterSpacing={0.03} size={1} font="/Bold.json" rotation-y={Math.PI}>
                        Work In Progress
                        <meshStandardMaterial color="black" />
                    </Text3D>

                </RigidBody>

            </Physics>







        </>
    )
}

export default WorkinProgress
