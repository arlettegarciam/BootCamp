import './App.css';
import Componente  from './componente'; 
import Suma from './funcion';

const Mensaje  = () =>{
  return <h1> HOLA MUNDO </h1>
}

const Saludo =() =>{
  return <h2>ESTE ES MI PRIMER EJERCICIO CON REACT</h2>
}

function App() {

  return (
    <div className="App">
      <Mensaje />
      <Componente color='red' message='HOLAAAA' />
      <Saludo />
      <Componente color='green' message='un bootcamp fullstack' />
      <Suma a={3} b={4} />

    </div>
  );
}

export default App;
