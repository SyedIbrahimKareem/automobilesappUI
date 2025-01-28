import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/home'
import NavBar from "./Components/NavigationHeader/Navbar"
import About from './Components/About'
import ProductListing from './Components/Products/ProductListing';
import { AlertProvider } from './Components/Alert/AlertContext';
function App() {
  localStorage.setItem("Username","");
  // return (
  //   <div>
  //     <LoginSignup/>
  //   </div>
  // );
  return (<BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route Component={<ProductListing />}/>
      <Route path="/LoginSignup" element={<AlertProvider><LoginSignup /></AlertProvider>}/>
      

    </Routes>
    
  </BrowserRouter>
  )
}

export default App;
