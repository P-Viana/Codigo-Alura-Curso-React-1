import './banner.css'

function Banner() {
    // JSX parece HTML mas não é. Vai criar uma página DOM para ser mostrada para o
    // usuário no navegador
    return (
        <header className="banner"> 
            <img src="/imagens/inframindTeam.jpeg" alt="Equipe Inframind"/>
        </header>
        
    )
}
export default Banner