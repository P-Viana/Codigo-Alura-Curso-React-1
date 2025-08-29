import './formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [pequenaDescricao, setPequenaDescricao] = useState('')
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            time: cargo,
            imagem,
            pequenaDescricao
        })
        setNome('')
        setCargo('')
        setImagem('')
        setPequenaDescricao('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome!"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Cargo" 
                    itens={props.times}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem!"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Pequena descrição" 
                    placeholder="Digite algo! Qualquer coisa para aparecer abaixo do seu nome! :)"
                    valor={pequenaDescricao}
                    aoAlterado={valor => setPequenaDescricao(valor)}
                />
                <Botao>
                    Crie o card agora!<br /> :)
                </Botao>
            </form>
        </section>
    )
}

export default Formulario