import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import store from '../../store';
import {
    Container,
    Header,
    Lista,
    Documento,
    BotoesLista
} from './styles';
import {toast}   from 'react-toastify';
import { css } from 'glamor';
import {Square,CheckSquare,ZoomIn,ZoomOut,Maximize} from '@styled-icons/feather';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Listar(){
    const {id,token,perfil} = store.getState().auth;
    const [ estabelecimentos,setEstabelecimentos] = useState([]);
    const [botao,setBotao] = useState('Entrega/Aberto');
    const [checkbox,setCheckBox] = useState([]);
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

    function CheckBox(props){
        
        
        const {marcado} = props;
        let elemento = {};
        checkbox.map((item,index) =>{
            if(index===marcado){
                elemento  = item;
            }
        });

        switch(elemento.valor){
            case 1:
                return <CheckSquare size="40"  style={{color:'#15a84f',paddingRight:'1vw',fontWeight:"bold"}}/>

            default:
                return <Square size="40"  style={{color:'#15a84f',paddingRight:'1vw',fontWeight:"bold"}}/>
        }
       
        

        
        
    }

    function handleMarcaTodos(){
        const  checkbox_aux =  checkbox.map(item =>{
            item.valor=1;
            return item;
        });
        console.log(checkbox_aux);
        setCheckBox(checkbox_aux);
    }

    function handleDesmarcaTodos(){
        const  checkbox_aux =  checkbox.map(item =>{
            item.valor=0;
            return item;
        });
        setCheckBox(checkbox_aux);
    }

    function handleDespachar(){
        checkbox.map( (item,index) =>{
            if(item.valor===1){
                api.put(`/documento/${item.id}` ,
                   {
                       motoboy:1
                    },
                   {
                    headers: {Authorization: 'Bearer '+token
                    }
                });
            }
        });
        toast.success('Despachado OK', {
            className:  css({
                background: "#86c739 !important"
            }),
        });

    }
    
    
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
                            <strong>{e.nome}</strong>
                            <p>{e.descricao}</p>
                        </Documento>
                    ))
                }
            </Lista>
        </Container>
    )
}