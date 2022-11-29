import {useState} from 'react';

function Condicional(){

    const[email,setEmail] = useState();
    const[userEmail,setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }
    
    function limpaEmail(e){
        setUserEmail("");
    }
    return(
        <div>
            <h2>
                Cadastree o seu Email:
            </h2>
            <form>
                <input type="email" 
                placeholder="Digite o seu email..."
                onChange={(e)=> setEmail(e.target.value)}
                />
                <button type = "submit" onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail && (
                    <div>
                        <p>
                            O Email do Usuário é: {userEmail}
                        </p>
                        <button onClick={limpaEmail}>Limpar</button>
                    </div>

                )}
            </form>
        
        </div>
    );
}

export default Condicional;