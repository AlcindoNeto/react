import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista.jsx';
import { useState } from 'react';
import SeuNome from './components/SeuNome.jsx';
import Saudacao from './components/Saudacao.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Empresa from './pages/Empresa.jsx';
import Contato from './pages/Contato.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';



function App() {
 /*  const [nome, setNome] = useState()
  const meusItens = ['React', 'Vue', 'Angular'] */
/*   const name = 'Alce'
  const newName = name.toLocaleUpperCase()
  const nome = 'Joao'

  function sum(a, b){
    return a + b;
  } */



  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer/>
    </Router>
    //<div className="App">
      /* <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <Frase/>
      <Frase/>
      <SayMyName nome="Alce"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Rodrigo" 
      idade="23" 
      profissao="programador"
      foto='https://via.placeholder.com/150'
      />
      <List/> */
      /* <Evento numero={1}/>
      <Evento numero={2}/> */
      /* <Form/>
      <Evento/> */
      /* <h1>Renderização Condicional</h1>
      <Condicional/> */
      /* <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/> */
      /* <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/> */
    //</div>
  )
}

export default App;
