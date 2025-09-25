import './colaborador.css'
import Time2 from '../../time2'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem2} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome2}</h4>
                <h5>{props.pequenaDescricao2}</h5>
            </div>
            <button style={{backgroundColor: props.corDeFundo}} onClick={() => props.duplicarCard(props.index)}>Duplicar</button>
            <button style={{backgroundColor: props.corDeFundo}} onClick={() => props.aoColaboradorDeletado(props.nome)}>Deletar</button>
        </div>
    )
}

export default Colaborador