import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Estimaciones } from './components/Estimaciones'
import { EstimacionesCrear } from './components/EstimacionesCrear'
import { EstimacionesRepuestos } from './components/EstimacionesRepuestos'

import { Aseguradoras } from './components/Aseguradoras'
import { AseguradorasRegistro } from './components/AseguradorasRegistro'
import { AseguradorasActualiza } from './components/AseguradorasActualiza'
import { AseguradorasElimina } from './components/AseguradorasElimina'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Estimaciones/>}>  </Route>
            <Route path='/crear' element={<EstimacionesCrear/>}>  </Route>
            <Route path='/admin-repuestos' element={ <EstimacionesRepuestos></EstimacionesRepuestos>}></Route>
            <Route path='/aseguradoras' element={<Aseguradoras/>}>  </Route>
            <Route path='/aseguradoras-registro' element={<AseguradorasRegistro/>}>  </Route>
            <Route path='/aseguradoras-actualiza' element={<AseguradorasActualiza/>}>  </Route>
            <Route path='/aseguradoras-elimina' element={<AseguradorasElimina/>}>  </Route>
        </Routes>
      </BrowserRouter>


      
    </>
  )
}

export default App
