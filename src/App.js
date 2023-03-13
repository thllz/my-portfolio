import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
// import './App.css'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route exact path='/aboutme' element={ <About /> } />
      <Route exact path='/projects' element={ <Projects /> } />
      <Route exact path='/contacts' element={ <Contacts /> } />
    </Routes>
  );
}

export default App;
