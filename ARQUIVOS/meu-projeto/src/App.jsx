import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {
  const name = 'Alce'
  const newName = name.toLocaleUpperCase()
  const nome = 'Joao'

  function sum(a, b){
    return a + b;
  }



  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
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
    </div>
  );
}

export default App;
