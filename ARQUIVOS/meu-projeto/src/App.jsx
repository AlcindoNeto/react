import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase'

function App() {
  const name = 'Alce'
  const newName = name.toLocaleUpperCase()

  function sum(a, b){
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
