import React,{useState} from 'react';
import { useHistory }  from 'react-router-dom';
import { css } from 'glamor';
import {
    Container,
    Conteudo
}   from './styles';
import api from '../../services/api';
import {toast}   from 'react-toastify';

export default function CriarConta() {

    const history = useHistory()
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    

    async function handleSalvar (e){
        e.preventDefault();
        const usuario = await api.post('/users/create' , 
            {
                nome,
                email,
                password
            }
        );
        if(usuario.data.status !== false){
            toast.success('Cadastro OK', {
                className:  css({
                    background: "#86c739 !important"
                }),
            });
            history.push("/")
        }
        else{
            toast.error('Erro no cadastro');
        }
        
    }

    return(
        <Container>
             <Conteudo>
                <form onSubmit={handleSalvar}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        onChange={(e) =>(setNome(e.target.value))}
                    />
                    <input 
                        type="email"
                        placeholder="e-mail"
                        onChange={(e) =>(setEmail(e.target.value))} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) =>(setPassword(e.target.value))}
                    />                    
                    <button type="submit">Criar Conta</button>
                </form>
            </Conteudo>
        </Container>
    )
}
