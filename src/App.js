import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path='/' element={<Navbar2 />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<Signup />} />
     </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
