import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {
    localStorage.getItem("Colaborador");
    const colaboradorSalvo = JSON.parse(localStorage.getItem("Colaborador"));
    console.log("Valores retornados: ",colaboradorSalvo);
    console.log("Nome: ", colaboradorSalvo.nome);
    return(
        
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: "#aeace6ff"}}>
            <h3 style={{borderColor: "#433ac2ff"}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => <Colaborador 
                // O indice aq em cima!  ----------------^
                corDeFundo={"#433ac2ff"}
                // Mudança na chave
                key={index}
                nome={colaboradorSalvo.nome} 
                pequenaDescricao={colaboradorSalvo.pequenaDescricao}
                imagem={colaboradorSalvo.imagem}
                aoColaboradorDeletado = {()=> props.aoColaboradorDeletado(colaborador)}
                duplicarCard = {()=> props.duplicarCard(colaborador, index)}/>)}
            </div>
        </section>
    )
}

export default Time