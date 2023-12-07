import { Route,Routes } from 'react-router-dom';
import './index.css';
import { Menu } from './pages/menu'
import Prerequisitos from './pages/Prerequisitos';
import Frameworks from './pages/frameworks';


function App() {

  return (
    < >
      <Routes>
        <Route path="/" element={<Menu/>}>
        <Route path="/Prerequisitos" element={<Prerequisitos/>}></Route>
        <Route path='/Frameworks' element={<Frameworks/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
