import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Sidebar from './components/Sidebar';

function App() {


  return (
    <>
    <Navbar />
    <Router>
   <Routes>
        <Route path="" />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}


        {/* Add more routes as needed */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
