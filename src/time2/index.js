import './time2.css'

const Time2 = () => {
    const colaboradorSalvoAtual = JSON.parse(localStorage.getItem("Colaborador"));
    return(
        <div className="Time2">
            <h1>Hello World!</h1>
            <p>{colaboradorSalvoAtual.nome}</p>
            <p>{colaboradorSalvoAtual.pequenaDescricao}</p>
            <img src={colaboradorSalvoAtual.imagem} alt="Imagem do Colaborador" />
        </div>
    )
}
export default Time2;