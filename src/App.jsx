import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./componentes/Home"
import { MasInfo } from "./componentes/Masinfo"

export function App(){ 
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pelicula/:id" element={<MasInfo />}/>
    </Routes>
  </Router>
  )
}