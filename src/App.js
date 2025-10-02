import { useState, useEffect } from 'react';
import './App.css';
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

  // Carrega colaboradores do localStorage apenas uma vez na inicialização
  useEffect(() => {
    const jsonStringColaboradores = localStorage.getItem("Colaboradores");
    if (jsonStringColaboradores) {
      setColaboradores(JSON.parse(jsonStringColaboradores));
    }
  }, []);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // Coloca todos os colaboradores anteriores mais o atual
    setColaboradores([...colaboradores, colaborador]);
    const jsonStringColaboradores = JSON.stringify(colaboradores);
    localStorage.setItem("Colaboradores", jsonStringColaboradores);
    console.log(jsonStringColaboradores);
  }
   const aoColaboradorDeletado = (colaborador) => {
   const novosColaboradores = colaboradores.filter(c => c !== colaborador);
   setColaboradores(novosColaboradores);
   const jsonStringColaboradores = JSON.stringify(novosColaboradores);
    localStorage.setItem("Colaboradores", jsonStringColaboradores);
    console.log(jsonStringColaboradores);
  }
  const duplicarCard = (colaborador, index) => {
    // Criar a duplicata do objeto
    var novoColaborador = Object.assign({}, colaborador);
    novoColaborador.index = colaboradores.length;
    const novosColaboradores = [...colaboradores, novoColaborador];
    setColaboradores(novosColaboradores);
    const jsonStringColaboradores = JSON.stringify(novosColaboradores);
    localStorage.setItem("Colaboradores", jsonStringColaboradores);
    console.log(jsonStringColaboradores);
  }
  return (
    <div className="App">
      <h1>Organizador de Colaboradores</h1>
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        index={colaboradores.length}
        />
      {/* <Time2 
        colaboradorSalvoAtual = {JSON.parse(localStorage.getItem("Colaborador"))}
      /> */}
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
        colaboradoresSalvosAtuais = {JSON.parse(localStorage.getItem("Colaboradores"))}
        />)}
    </div>
  );
}

export default App;
