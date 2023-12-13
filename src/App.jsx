import { Route,Routes } from 'react-router-dom';
import './index.css';
import { Menu } from './pages/menu'
import Prerequisitos from './pages/Prerequisitos';
import Frameworks from './pages/frameworks';
import Diagramas from './pages/Diagramas';
import Scrips from './pages/scrips';


function App() {

  return (
    < >
      <Routes>
        <Route path="/" element={<Menu/>}>
        <Route path="/Prerequisitos" element={<Prerequisitos/>}></Route>
        <Route path='/Frameworks' element={<Frameworks/>}></Route>
        <Route path='/Diagramas' element={<Diagramas/>}></Route>
        <Route path='/Scrips' element={<Scrips/>}></Route>


        
        </Route>
      </Routes>
    </>
  )
}

export default App
