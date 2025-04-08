import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import TableAvailability from './components/tableAvailability/TableAvailability'
import Contacts  from './components/Contacts/Contacts'
import Login from './components/user-section/login/Login'
import Register from './components/user-section/register/Register'
import { useNavigate } from 'react-router-dom'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
    <Header isLoggedIn={isLoggedIn} handleLogOut={handleLogOut}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/TableAvailability" element={<TableAvailability/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
