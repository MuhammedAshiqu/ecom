import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import SingleProd from "./components/SingleProd/SingleProd";
import AddProd from "./components/AddProduct/AddProd";
import ManageProd from "./components/ManageProd/ManageProd";
import Cart from "./components/Cart/Cart";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/single-product' element={<SingleProd />} />
        <Route path='/add-prod' element={<AddProd   />} />
       <Route path='/manage-prod' element={<ManageProd  />} />
       <Route path='/cart' element={<Cart  />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
