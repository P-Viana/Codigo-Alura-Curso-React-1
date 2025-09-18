import { useState } from 'react';
import './App.css';
import Formulario from './components/formulario';
import Time from './components/time';
import Time2 from './time2';

function App() {

  document.addEventListener('DOMContentLoaded', function() {
    // Código a ser executado quando o DOM estiver pronto
    // Pegar os valores do localStorage
    localStorage.getItem("Colaborador");
    // Apenas durante o DEBUG usar o console.log()
    console.log(colaboradores); 
  });
  const times = [
    {
      nome: 'Líder',
      corPrimaria: '#433ac2ff',
      corSecundaria: '#aeace6ff'
    },
    {
      nome: 'Gerente Administrativo',
      corPrimaria: '#5b53c9ff',
      corSecundaria: '#c1c0e6ff'
    },
    {
      nome: 'Gerente de TI',
      corPrimaria: '#655ec5ff',
      corSecundaria: '#a7a5e2ff'
    },
    {
      nome: 'Gerente de Materiais',
      corPrimaria: '#736dc5ff',
      corSecundaria: '#8986dfff'
    },
    {
      nome: 'Gerente de Projeto',
      corPrimaria: '#736dc5ff',
      corSecundaria: '#8986dfff'
    },
    {
      nome: 'Gerente de Comunicação',
      corPrimaria: '#655ec5ff',
      corSecundaria: '#a7a5e2ff'
    },
    {
      nome: 'Gerente de IA',
      corPrimaria: '#5b53c9ff',
      corSecundaria: '#c1c0e6ff'
    },
    {
      nome: 'Colaborador',
      corPrimaria: '#433ac2ff',
      corSecundaria: '#aeace6ff'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const jsonStringColaborador = JSON.stringify(colaborador);
    localStorage.setItem("Colaborador", jsonStringColaborador);
    console.log(jsonStringColaborador);
    // Coloca todos os colaboradores anteriores mais o atual
    setColaboradores([...colaboradores, colaborador]);
    console.log('colaborador: ', colaborador);
  }
   const aoColaboradorDeletado = (colaborador) => {
   const novosColaboradores = colaboradores.filter(c => c !== colaborador);
   setColaboradores(novosColaboradores);
  }
  const duplicarCard = (colaborador, index) => {
    // Criar a duplicata do objeto
    var novoColaborador = Object.assign({}, colaborador);
    novoColaborador.index = colaboradores.length;
    const novosColaboradores = [...colaboradores, novoColaborador];
    setColaboradores(novosColaboradores);
  }
  return (
    <div className="App">
      <h1>Organizador de Colaboradores</h1>
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        index={colaboradores.length}
        />
      <Time2 />
      {times.map((time) => <Time 
        key={time.nome}
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        //aoColaboradorDeletado={(index) => aoColaboradorDeletado(index)}
        aoColaboradorDeletado={(colaborador) => aoColaboradorDeletado(colaborador)}
        index = {colaboradores.length}
        duplicarCard={(colaborador, index) => duplicarCard(colaborador, index)}
        />)}
    </div>
  );
}

export default App;
