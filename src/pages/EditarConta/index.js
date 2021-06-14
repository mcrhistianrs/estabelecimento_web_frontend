import React,{useState} from 'react';
import { useHistory }  from 'react-router-dom';
import store from '../../store';
import { css } from 'glamor';
import {
    Container,
    Conteudo
}   from './styles';
import api from '../../services/api';
import {toast}   from 'react-toastify';

export default function EditarConta() {

    const history = useHistory()
    const {id,token} = store.getState().auth;

    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [oldPassword,setoldPassword] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');
    
    

    async function handleEditar (e){
        e.preventDefault();
        const usuario = await api.put(`/users/update/${id}`, 
            {
                nome,
                email,
                oldPassword,
                password,
                confirmPassword
            },
            {
                headers: {Authorization: 'Bearer '+token}
            }            
        );
        if(usuario.data.status !== false){
            toast.success('Atualização OK', {
                className:  css({
                    background: "#86c739 !important"
                }),
            });
            history.push("/")
        }
        else{
            toast.error('Erro no Atualização');
        }
        
    }

    return(
        <Container>
             <Conteudo>
                <form onSubmit={handleEditar}>
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
                        placeholder="oldPassword" 
                        onChange={(e) =>(setoldPassword(e.target.value))}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) =>(setPassword(e.target.value))}
                    />
                    <input 
                        type="password" 
                        placeholder="confirmPassword" 
                        onChange={(e) =>(setconfirmPassword(e.target.value))}
                    />                    
                    <button type="submit">Editar Conta</button>
                </form>
            </Conteudo>
        </Container>
    )
}
