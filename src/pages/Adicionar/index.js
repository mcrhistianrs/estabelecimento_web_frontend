import React,{useState} from 'react';
import { css } from 'glamor';
import {
    Container,
    Conteudo
}   from './styles';
import api from '../../services/api';
import store from '../../store';
import {toast}   from 'react-toastify';

export default function Adicionar() {

    const [nome,setNome] = useState('');
    const [descricao,setDescricao] = useState('');
    const {id,token} = store.getState().auth;
    

    async function handleSalvar (e){
        e.preventDefault();
        const estabelecimento = await api.post('/estabelecimento/create' , 
            {
                nome,
                descricao,
                "user_id" : id
            },
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
                <form onSubmit={handleSalvar}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        onChange={(e) =>(setNome(e.target.value))}
                    />
                    <input 
                        type="text"
                        placeholder="Descrição"
                        onChange={(e) =>(setDescricao(e.target.value))} 
                    />                    
                    <button type="submit">Salvar</button>
                </form>
            </Conteudo>
        </Container>
    )
}
