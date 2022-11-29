import Button from "./evento/Button";

function Evento(props){

    function meuEvento(){
        console.log("Ativando primeiro evento!");
    }
    function segundoEvento(){
        console.log("ativando o segundo evento!");
    }
    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text = "primeiro eventos"/>
            <button onClick = {segundoEvento}>Ativar!</button>
        </>
    );
}

export default Evento;