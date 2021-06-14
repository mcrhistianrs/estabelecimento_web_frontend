import React,{useState}   from 'react';
import {useDispatch}      from 'react-redux'; 

import {signOut}          from '../../store/modules/auth/actions';

import logo   from '../../assets/logo.png';
import { FilePlus,FileMinus, Edit2, List,LogOut}  from '@styled-icons/feather';

import Listar from '../Listar'
import Adicionar from '../Adicionar';
import Remover from '../Remover';
import Editar from '../Editar';

import { 
  MenuDashBoard,
  Container,
  Header,
  Menus,
  Conteudo
 } from './styles';


export default function DashBoard() {
  const [ botao , setBotao] = useState('Listar');
  const dispatch = useDispatch();

  

  function Content(props){
    const {botao} = props;

    switch(botao){

      case 'Listar':
        return <Listar />

      case 'Adicionar':
        return <Adicionar />

      case 'Remover':
        return <Remover />

      case 'Editar':
        return <Editar />

      default:
        return <h1>default</h1>
    }
  }

  function handleLogout(){
    dispatch(signOut());
  }

  return (
    <Container>
      <MenuDashBoard>
        <button onClick={handleLogout}>
          <LogOut size="36" color="black" style={{color:'#15a84f',paddingRight:'1vw',fontWeight:"bold"}} />
        </button>
        
      </MenuDashBoard>
      
      <Header>
        <img src={logo} alt="Logo" />
      </Header>

      <Menus>
        <button onClick={() => setBotao('Adicionar')}>
          <FilePlus size="30" color="white" style={{margin:"1vh"}} />
        </button>

        <button onClick={() => setBotao('Remover')}>
          <FileMinus size="30" color="white" style={{margin:"1vh"}} />
        </button>

        <button onClick={() => setBotao('Editar')}>
          <Edit2 size="30" color="white" style={{margin:"1vh"}} />
        </button>
          
        <button onClick={() => setBotao('Listar')}>
          <List size="30" color="white" style={{margin:"1vh"}} />
        </button>
        
      </Menus>

      <Conteudo>
       <Content botao={botao} />
      </Conteudo>

    </Container>
  );
}
