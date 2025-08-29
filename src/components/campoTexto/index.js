import './CampoTexto.css'

// PROPS as propriedades que estão chegando ao componente
// Interpolação de string PARA JS!!!  `Digite ${props.placeholder}...`
const CampoTexto = (props) => {
    // O useState é um hook, uma ferramenta. No caso, para usar o estado
    const aoDigitar =(evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={aoDigitar} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}/>
        </div>
    )
    
}

export default CampoTexto