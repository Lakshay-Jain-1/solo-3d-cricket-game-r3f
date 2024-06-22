import { React, Suspense ,lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KeyboardControls, Loader } from "@react-three/drei"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Canvas } from '@react-three/fiber'

const StarterApp = lazy(() => import('./StarterApp.jsx'));
const WorkinProgress = lazy(() => import('./WorkinProgress.jsx'));




ReactDOM.createRoot(document.getElementById('root')).render(

  <>

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
              <App />
            </KeyboardControls>
          </Suspense>
        }
        ></Route>

        <Route path='/' element={
          <Suspense fallback={<Loader />}>

            <StarterApp />

          </Suspense>
        }
        ></Route>
        <Route path='/multiplayer' element={
          <Suspense fallback={<Loader />}>
            <Canvas color='black' shadows={true} camera={{ position: [0, 0, -2] }} frameloop='demand'>
              <WorkinProgress />
            </Canvas>

          </Suspense>
        }
        ></Route>

      </Routes>
    </BrowserRouter>
  </>
)
