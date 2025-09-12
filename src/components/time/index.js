import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {
    return(

        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: "#aeace6ff"}}>
            <h3 style={{borderColor: "#433ac2ff"}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => <Colaborador 
                // O indice aq em cima!  ----------------^
                corDeFundo={"#433ac2ff"}
                // Mudança na chave
                key={index}
                nome={colaborador.nome} 
                pequenaDescricao={colaborador.pequenaDescricao}
                imagem={colaborador.imagem}
                //aoColaboradorDeletado={() => props.aoColaboradorDeletado(index)}
                aoColaboradorDeletado = {()=> props.aoColaboradorDeletado(colaborador)}
                duplicarCard = {()=> props.duplicarCard(colaborador, index)}/>)}
            </div>
        </section>
    )
}

export default Time