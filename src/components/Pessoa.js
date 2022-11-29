function Pessoa(props){
    return (
        <div>
            <img src = {props.foto}/>
            <h2>Nome: {props.name}</h2>
            <p> Idade: {props.idade}</p>
            <p> Profissão: {props.profissao}</p>
        </div>
    );

}
export default Pessoa;