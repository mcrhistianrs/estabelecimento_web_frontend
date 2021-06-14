import React from 'react';
import {useDispatch}  from 'react-redux';
import { Link } from 'react-router-dom';
import { Container,Conteudo } from './styles';
import logo   from '../../assets/logo.png';
import { signInRequest} from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  
  
  
  const handlesubmit = (e) =>{
    e.preventDefault();
    dispatch(signInRequest(e.target[0].value,e.target[1].value));
  }

  return (
    <Container>
      <Conteudo>
        <img src={logo} alt="Logo" />
        <form onSubmit={handlesubmit} >
          <input type="email"     placeholder="Digite seu e-mail" />
          <input type="password"  placeholder="Digite sua senha"  />
          <button type="submit">Entrar</button>
          <Link to="/criarconta">Criar conta</Link>
        </form>
      </Conteudo>
    </Container>
  );
}
