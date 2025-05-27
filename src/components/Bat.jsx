
import { Html, useKeyboardControls } from "@react-three/drei"
import { useState, useRef } from "react"
import { Model } from './BatModel'

function Bat() {
    const [reset, setReset] = useState()

    function reseted() {
        setReset(Math.random())
    }

    return (
        <>
            <Html as="div" position={[-0.9, 4.5, 0]}   >
                <button  onClick={() => reseted()} style={{width:"100px",height:"48px",backgroundColor:"lightblue"}}  >
                    Reset Bat
                </button>
            </Html>
            <Model key={reset} />
        </>
    )
}

export default Bat
