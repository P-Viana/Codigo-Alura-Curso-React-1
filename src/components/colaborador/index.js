import './colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.pequenaDescricao}</h5>
            </div>
            <button style={{backgroundColor: props.corDeFundo}} onClick={() => props.duplicarCard(props.index)}>Duplicar</button>
            <button style={{backgroundColor: props.corDeFundo}} onClick={() => props.aoColaboradorDeletado(props.nome)}>Deletar</button>
        </div>
    )
}

export default Colaborador