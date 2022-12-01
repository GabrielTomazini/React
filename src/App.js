import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import NavBar from './components/NavBar';
function App() {
   
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/empresa">
          <Empresa/>
        </Route>
        <Route path="/contato">
          <Contato/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
