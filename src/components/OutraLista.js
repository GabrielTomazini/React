function OutraLista({itens}){
    return(
        <>
            <h3>Lista:</h3>
            {itens.map((item, index) => (
                    <p key={index}> {item}</p>
                ))}
        </>
    );
}

export default OutraLista;