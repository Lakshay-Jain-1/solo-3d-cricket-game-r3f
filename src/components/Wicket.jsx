import { CuboidCollider, CylinderCollider, MeshCollider, RigidBody, CapsuleCollider } from "@react-three/rapier"
import { Model } from './WicketModel'

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
