
import './App.css';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista.js';
function App() {

  const meusItens = ['React','Vue','Angular'];
  return (
    <div className="App">
      <h1> Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
    </div>
   
  );
}

export default App;
