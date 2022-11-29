import { useState } from 'react';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Usuario:'+ {name} + 'foi cadastrado com a senha: '+ {password});
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome..." 
                    onChange={(e)=> setName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="*************"
                    onChange={(e)=> setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}
export default Form;