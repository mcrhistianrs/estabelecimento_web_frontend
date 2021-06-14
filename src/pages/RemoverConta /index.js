import React,{useState} from 'react';
import { useHistory }  from 'react-router-dom';
import { css } from 'glamor';
import {
    Container,
    Conteudo
}   from './styles';
import api from '../../services/api';
import store from '../../store';
import {toast}   from 'react-toastify';

export default function RemoverConta() {

    const history = useHistory()

    const {id,token} = store.getState().auth;

    
    

    async function handleSalvar (e){
        e.preventDefault();
        const usuario = await api.delete(`/users/delete/${id}`,
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
                <form onSubmit={handleSalvar}>
                    <input 
                        type="text" 
                        value={id}
                        readOnly={true}
                    />                    
                    <button type="submit">Remover Conta</button>
                </form>
            </Conteudo>
        </Container>
    )
}
