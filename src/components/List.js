import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" ano_lancamento={2010}/>
                <Item marca = "Fiat"  ano_lancamento={1987}/>
                <Item marca = "Renault"  ano_lancamento={1999}/>
            </ul>
        </>
    );
}


export default List