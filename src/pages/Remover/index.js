import React,{useState} from 'react';
import { css } from 'glamor';
import {
    Container,
    Conteudo
}   from './styles';
import api from '../../services/api';
import store from '../../store';
import {toast}   from 'react-toastify';

export default function Remover() {

    const [idestabelecimento,setIdestabelecimento] = useState('');
    const {token} = store.getState().auth;
    

    async function handleRemover (e){
        e.preventDefault();
        const estabelecimento = await api.delete(`/estabelecimento/delete/${idestabelecimento}` , 
            {
                headers: {Authorization: 'Bearer '+token}
            }
        );
        if(estabelecimento.data.status !== false){
            toast.success('Cadastro OK', {
                className:  css({
                    background: "#86c739 !important"
                }),
            });
        }
        else{
            toast.error('Erro no cadastro');
        }
        
    }

    return(
        <Container>
             <Conteudo>
                <form onSubmit={handleRemover}>
                    <input 
                        type="text" 
                        placeholder="Código do estabelecimento" 
                        onChange={(e) =>(setIdestabelecimento(e.target.value))}
                    />
                    <button type="submit">Remover</button>
                </form>
            </Conteudo>
        </Container>
    )
}
