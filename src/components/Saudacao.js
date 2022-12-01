function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return "Olá," + algumNome+" Taokay?";
    }
    return (
        <div>
            <p>{gerarSaudacao(nome)}</p>
        </div>
    )
}

export default Saudacao;