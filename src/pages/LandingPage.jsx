
import '../stylesheets/landingPage.css'
import { Canvas } from "@react-three/fiber"
import { Text3D, Center, Stage, SpotLight } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'


function StarterApp() {
    const navigate = useNavigate()
    return (
        <>
            <Canvas color='black' shadows={true} camera={{ position: [0, 0, -6] }} frameloop='demand'>
                <SpotLight
                    color="black"
                    position={[13, 6.5, 0]}
                    distance={20}
                    angle={1}
                    attenuation={20}
                    anglePower={10} // Diffuse-cone anglePower (default: 5)
                />
                <Stage shadows="contact">
                    <Center top left>
                        <Text3D letterSpacing={0.03} position={[10, 6, 0]} rotation-z={-0.1} size={1} font="/Bold.json" rotation-y={Math.PI}>
                            Cricket Maniac
                            <meshStandardMaterial color="orange" />
                        </Text3D>

                        <Text3D letterSpacing={0.06} position={[-2.3, 3.4, 1.2]} size={0.8}  font="/Bold.json" rotation-y={Math.PI} rotation-x={0} onClick={()=>navigate("/game")} >
                            Play →
                            <meshStandardMaterial color="orange" />
                        </Text3D>


                        
                    </Center>
                </Stage>
            </Canvas>

        </>
    )
}

export default StarterApp
