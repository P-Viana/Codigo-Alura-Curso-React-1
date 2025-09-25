import Colaborador from '../components/colaborador';
import './time2.css'

const Time2 = () => {
    const colaboradorSalvoAtual = JSON.parse(localStorage.getItem("Colaborador"));
    const arrayColaboradores = [colaboradorSalvoAtual, colaboradorSalvoAtual];
    return(
        <div className='Time2'>
            <div className='ColaboradoresTime2'>
                {arrayColaboradores.map(objetoColaborador => {
                    return <Colaborador
                        nome = {objetoColaborador.nome}
                        pequenaDescricao = {objetoColaborador.pequenaDescricao}
                        imagem = {objetoColaborador.imagem}
                    />
                })}
            </div>
            <h1>Hello World!</h1>
            <p>{arrayColaboradores[0].nome}</p>
            <p>{arrayColaboradores[0].pequenaDescricao}</p>
            <img src={arrayColaboradores[0].imagem} alt="Imagem do Colaborador" />
        </div>
    )
}
export default Time2;