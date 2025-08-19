import './stylesheets/App.css'
import { Suspense ,lazy } from 'react'
import { KeyboardControls, Loader } from "@react-three/drei"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
