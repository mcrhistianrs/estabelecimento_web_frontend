import React,{useState}   from 'react';
import {useDispatch}      from 'react-redux'; 

import {signOut}          from '../../store/modules/auth/actions';

import logo   from '../../assets/logo.png';
import { FilePlus,List,LogOut}  from '@styled-icons/feather';

import Listar from '../Listar'


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
        <button >
          <FilePlus size="30" color="white" style={{margin:"1vh"}} />
        </button>
          
        <button >
          <List size="30" color="white" style={{margin:"1vh"}} />
        </button>
        
      </Menus>

      <Conteudo>
       <Content botao={botao} />
      </Conteudo>

    </Container>
  );
}
