import { useState } from 'react';
import './App.css';
import Banner from './components/banner/banner';
import Formulario from './components/formulario';
import Time from './components/time';

function App() {

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
    // Coloca todos os colaboradores anteriores mais o atual
    setColaboradores([...colaboradores, colaborador])
  }
  const aoColaboradorDeletado = (colaborador) => {
    const novosColaboradores = colaboradores.filter(c => c !== colaborador);
    setColaboradores(novosColaboradores);
  }
  return (
    <div className="App">
      <h1>Inframind</h1>
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />
      {times.map((time) => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoColaboradorDeletado={(colaborador) => aoColaboradorDeletado(colaborador)}
        />)}
    </div>
  );
}

export default App;
