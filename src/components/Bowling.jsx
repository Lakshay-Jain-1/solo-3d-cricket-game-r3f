import * as THREE from "three"
import { Float, RoundedBox, DragControls, Text } from "@react-three/drei"
import { useRef, useState } from "react"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Ballspeed, Ballrigid } from '../store/BallController'


function Speed() {
    const setspeed = useSetRecoilState(Ballspeed)
    const positions = useRef()
    const setRigid = useSetRecoilState(Ballrigid)
    const getposition = new THREE.Vector3()


    return (
        <>
             <DragControls ref={positions}
                axisLock='z'
                onDragEnd={() => {
                    let { x, y, z } = positions.current.getWorldPosition(getposition)
                    setspeed([x, y, z]);
                    setRigid((prev) => !prev)
                }} >
                <RoundedBox
                    position={[-1.1, -0.3, -2]}
                    args={[0.5, 0.1, 0.25]} // Width, height, depth. Default is [1, 1, 1]
                    radius={0.05} // Radius of the rounded corners. Default is 0.05
                    smoothness={4} // The number of curve segments. Default is 4
                    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                >
                    <meshPhongMaterial color="#f3f3f3" wireframe />
                </RoundedBox>
            </DragControls>
            
        </>
    )
}



function Bowling() {
    const speed = useRecoilValue(Ballspeed)
    const setRigid = useSetRecoilState(Ballrigid)
    const getRigid = useRecoilValue(Ballrigid)
    const [displaySpeed, setDisplaySpeed] = useState(false)
    useState(() => {

        if (window.innerWidth > 657) {
            console.log(window.innerWidth, typeof window.innerWidth)
            setDisplaySpeed(true)
        }
    }, [])

    return (
        <>
           {displaySpeed && <Float rotationIntensity={0.75} floatIntensity={0.5} >
                <Text fontSize={1} fontWeight={500} fontStyle='italic' color={"red"} textAlign='right' rotation-y={Math.PI} position={[-3.5, 3, 6]}>
                    Speed: {(speed[1] * Math.random() * 6 + 55).toFixed(2)}
                </Text>
            </Float>}
            {getRigid ? <> </> : <Speed />}
        </>
    )
}

export default Bowling
