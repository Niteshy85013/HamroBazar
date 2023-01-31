import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
 
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
import Contact from "./components/home/Contact";
import Computers from "./components/products/Computers"
import "./style/Main.css"
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/computer" element={<Computers/>}/>
      
    </Routes>
     
   </Router>
  );
}

export default App;
