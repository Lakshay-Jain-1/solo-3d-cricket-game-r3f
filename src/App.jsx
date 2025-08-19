import './stylesheets/App.css'
import { Suspense ,lazy } from 'react'
import { KeyboardControls, Loader } from "@react-three/drei"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas } from '@react-three/fiber'

const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const MultiPlayer = lazy(() => import('./pages/Multiplayer.jsx'));
const Game = lazy(() => import('./pages/Game.jsx'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/game' element={
          <Suspense fallback={<Loader />}>
            <KeyboardControls map={[
              { name: 'forward', keys: ['ArrowUp', "w"] },
              { name: 'backward', keys: ['ArrowDown', "s"] },
              { name: 'left', keys: ['ArrowLeft', "a"] },
              { name: 'right', keys: ['ArrowRight', "d"] },
              { name: 'shift', keys: ['Shift'] },
            ]}>
              <Game />
            </KeyboardControls>
          </Suspense>
        }
        ></Route>

        <Route path='/' element={
          <Suspense fallback={<Loader />}>

            <LandingPage />

          </Suspense>
        }
        ></Route>
        <Route path='/multiplayer' element={
          <Suspense fallback={<Loader />}>
            <Canvas color='black' shadows={true} camera={{ position: [0, 0, -2] }} frameloop='demand'>
              <MultiPlayer />
            </Canvas>

          </Suspense>
        }
        ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
