import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Estimaciones } from './components/Estimaciones'
import { EstimacionesCrear } from './components/EstimacionesCrear'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Estimaciones/>}>  </Route>
            <Route path='/crear' element={<EstimacionesCrear/>}>  </Route>
        </Routes>
      </BrowserRouter>


      
    </>
  )
}

export default App
