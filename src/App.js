import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
function App() {
  return(
    <>
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/About' element={<About/>}/>

    </Routes>
    </BrowserRouter>

    </>
  )
  
    
  
}

export default App;
