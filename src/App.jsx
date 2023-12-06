import { Route,Routes } from 'react-router-dom';
import './index.css';
import { Menu } from './pages/menu'

function App() {

  return (
    < >
      <Routes>
        <Route path="/Menu" element={<Menu/>}>

        </Route>
      </Routes>
    </>
  )
}

export default App
