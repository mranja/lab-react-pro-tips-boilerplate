import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoute from './AllRoute'
import NavBar from './component/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AllRoute />
      </BrowserRouter>
    </>
  )
}

export default App