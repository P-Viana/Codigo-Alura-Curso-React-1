import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {
    return(

        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome} 
                pequenaDescricao={colaborador.pequenaDescricao}
                imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time