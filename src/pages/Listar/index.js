import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import store from '../../store';
import {
    Container,
    Header,
    Lista,
    Documento,
} from './styles';

export default function Listar(){
    const {token} = store.getState().auth;
    const [ estabelecimentos,setEstabelecimentos] = useState([]);
    const [pesquisa,setPesquisa] = useState([]);

    
    async function handlePesquisa(){
        const response = await api.get('/estabelecimento/search',
            {
                params:{nome:pesquisa},
                headers: {Authorization: 'Bearer '+token}
            }
        );        
        setEstabelecimentos(response.data);
    }

    useEffect(() =>{
        handlePesquisa()
    },[])
    
    return (
        <Container>
            <Header>
                <input 
                    type="email"     
                    placeholder="Digite o nome da empresa" 
                    onChange={(e) => setPesquisa(e.target.value)}
                />
                <button onClick={() => handlePesquisa()}>Pesquisar</button>
            </Header>
            <Lista>
                {
                    estabelecimentos.map(e =>(
                        <Documento>
                            <strong>{e.id}</strong>
                            <strong>{e.nome}</strong>
                            <p>{e.descricao}</p>
                        </Documento>
                    ))
                }
            </Lista>
        </Container>
    )
}