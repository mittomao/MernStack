import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import Page & Component

import  Home  from "./Pages/Home";
import  About  from "./Pages/About";

import  Navbar  from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}>
          </Route>
          <Route path='/about' element = {<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
