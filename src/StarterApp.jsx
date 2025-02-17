
import './StarterApp.css'
import { Canvas } from "@react-three/fiber"
import { Stars, Sky, Environment, Text3D, Center, Float, Stage, Html, SpotLight } from '@react-three/drei'


function StarterApp() {
  

    return (
        <>


            <Canvas color='black' shadows={true} camera={{ position: [0, 0, -6] }} frameloop='demand'>

                <Stars count={5000} factor={4} />
                <Environment preset='night' />

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

                        <Html as='div' position={[-2, 5, 1]}>
                            <button
                                style={{

                                    borderRadius: "5%",
                                    backgroundColor: "whitesmoke",
                                    fontSize: "40px",
                                    color: "blueviolet",
                                    textAlign: "center",
                                    marginLeft: "90px",
                                    background: "linear-gradient(202deg, rgba(0,0,0,1) 0%, rgba(31,4,11,1) 37%, rgba(252,252,252,1) 100%)",
                                    padding: "10px 20px",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    textDecoration: "none"
                                }}
                            >
                                <a
                                    href="./game"
                                    style={{
                                        textDecoration: "none",
                                        color: "whitesmoke", // Inherits the button's color
                                        textAlign: "center",
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    Play
                                </a>
                            </button>
                            <button

                                style={{
                                    marginTop: "10px",
                                    borderRadius: "5%",
                                    backgroundColor: "whitesmoke",
                                    fontSize: "40px",
                                    color: "blueviolet",
                                    textAlign: "center",
                                    marginLeft: "40px",
                                    background: "linear-gradient(202deg, rgba(0,0,0,1) 0%, rgba(31,4,11,1) 37%, rgba(252,252,252,1) 100%)",
                                    padding: "10px 20px",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    textDecoration: "none"
                                }}
                            >
                                <a
                                    href="/multiplayer"
                                    style={{
                                        textDecoration: "none",
                                        color: "whitesmoke", // Inherits the button's color
                                        textAlign: "center",
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    Multiplayer
                                </a>
                            </button>

                            <button
                                onClick={(() => alert(`
                      TO BAT -->          
shift+left key ---> left shot \nshift+right key ---> right shot \nshift+forward key ---> forward shot
                    TO BALL -->
push  that lever to right side to make it spin in right direction \n push that lever to left side to make it spin in left direction
`))}

                                style={{
                                    marginTop: "10px",
                                    borderRadius: "5%",
                                    backgroundColor: "whitesmoke",
                                    fontSize: "40px",

                                    textAlign: "center",
                                    marginLeft: "40px",
                                    background: "linear-gradient(202deg, rgba(0,0,0,1) 0%, rgba(31,4,11,1) 37%, rgba(252,252,252,1) 100%)",
                                    padding: "10px 20px",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    textDecoration: "none",
                                    color: "whitesmoke",

                                }}
                            >

                                How To Play ?

                            </button>

                        </Html>


                    </Center>




                </Stage>
            </Canvas>

        </>
    )
}

export default StarterApp
