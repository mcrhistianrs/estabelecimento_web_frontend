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

    const [idEstabelecimento,setIdEstabelecimento] = useState(0);
    const [nome,setNome] = useState('');
    const [descricao,setDescricao] = useState('');
    const {id,token} = store.getState().auth;
    

    async function handleAtualizar (e){
        e.preventDefault();
        const estabelecimento = await api.put(`estabelecimento/retrieve/${idEstabelecimento}` , 
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
                <form onSubmit={handleAtualizar}>
                    <input 
                        type="text" 
                        placeholder="Código" 
                        onChange={(e) =>(setIdEstabelecimento(e.target.value))}
                    />
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
                    <button type="submit">Atualizar</button>
                </form>
            </Conteudo>
        </Container>
    )
}
