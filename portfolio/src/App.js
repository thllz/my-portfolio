import './App.css';
import { scaleDown as Menu } from 'react-burger-menu'

function App() {
  return (
    <div >
      <>
        <Menu className='menu'>
          <a id="home" className="menu-item" href="/">Inicio</a>
          <a id="about" className="menu-item" href="/about">Sobre mim</a>
          <a id="projects" className="menu-item" href="/contact">Projetos</a>
          <a id="contact" className="menu-item" href="/contact">Contatos</a>
        </Menu>
      </>
      <div className='header'>
        <h1> Olá, bem vindo(a) ao meu portfólio!</h1>
      </div>
      <div>
        <p>Sobre mim</p>
      </div>
      <div>
        <p>Projetos</p>
      </div>
      <div>
        <p>Contatos</p>
      </div>
    </div>
  );
}

export default App;
