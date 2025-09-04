import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {
    return(

        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: "#aeace6ff"}}>
            <h3 style={{borderColor: "#433ac2ff"}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                corDeFundo={"#433ac2ff"}
                key={colaborador.nome}
                nome={colaborador.nome} 
                pequenaDescricao={colaborador.pequenaDescricao}
                imagem={colaborador.imagem}
                aoColaboradorDeletado={() => props.aoColaboradorDeletado(colaborador)}/>)}
            </div>
        </section>
    )
}

export default Time