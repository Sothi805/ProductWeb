import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

function App() {

  return (
    <>
      <Router>
        <div className='w-full bg-white border-b-2 border-[#2E3192] drop-shadow-md sticky top-0 z-50'>
          <Navbar/>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
