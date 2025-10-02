import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {
    const arrayColaboradoresAntigos = [props.colaboradoresSalvosAtuais];
    return(
        
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: "#aeace6ff"}}>
            <h3 style={{borderColor: "#433ac2ff"}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((objetoColaborador, index) => 
                        <Colaborador 
                        // O indice aq em cima!  ----------------^
                        corDeFundo={"#433ac2ff"}
                        // Mudança na chave
                        key={index}
                        nome={objetoColaborador.nome} 
                        pequenaDescricao={objetoColaborador.pequenaDescricao}
                        imagem={objetoColaborador.imagem}
                        aoColaboradorDeletado = {()=> props.aoColaboradorDeletado(objetoColaborador)}
                        duplicarCard = {()=> props.duplicarCard(objetoColaborador, index)}/>
                    )
                }
            </div>
        </section>
    )
}

export default Time