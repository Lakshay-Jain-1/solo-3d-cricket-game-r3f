
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useSetRecoilState } from 'recoil'
import { Balllocation } from "../store/BallController"

function Pitch() {
    const balllocation = useSetRecoilState(Balllocation)
    return (
        <>
            <RigidBody type='fixed' scale={[1.7, 1.5, 0.25]}  >
                <CuboidCollider args={[1, 1, 0.5]} position={[0, 0, 29]} rotation={[0, -Math.PI, 0]} />
            </RigidBody>
            {/* Pitch */}
            <RigidBody type='fixed' restitution={[0]}>
                <mesh onClick={({ x, y }) => { balllocation({ x, y }) }} receiveShadow position={[0, -2, 0]} scale={[3, 0.5, 15]}  >
                    <boxGeometry />
                    <meshBasicMaterial side={THREE.DoubleSide} color="green" />
                </mesh>
            </RigidBody>
        </>
    )
}

export default Pitch
