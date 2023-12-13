import { Route,Routes } from 'react-router-dom';
import './index.css';
import { Menu } from './pages/menu';
import ManualTecnico from './pages/ManualTecnico';
import ManualUsuario from './pages/ManualUsuario';


function App() {

  return (
    < >
      <Routes>
        <Route path="/" element={<Menu/>}>
        <Route path="/ManuelTecnico" element={<ManualTecnico/>}></Route>
        <Route path="/ManualUsuario" element={<ManualUsuario/>}></Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
