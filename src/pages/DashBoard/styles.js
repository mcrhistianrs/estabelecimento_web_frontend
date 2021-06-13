import styled from 'styled-components';
import {darken} from 'polished';

export const MenuDashBoard  = styled.div`
    display:flex;
    justify-content:flex-end;
    background-color:#15a84f;
    outline:none;
    background-color:white;

    button{
        background-color:white;
        border:0px;
    }
`;

export const Container = styled.body`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: 0.1fr 0.2fr 0.1fr 2.1fr;
`;

export const Header = styled.div`
    display:flex;
    justify-content:center;
    img{
        height:9vh;
        width:14vw;
        margin-top:1vh;
        margin-bottom:1vh;
    }
    background-color:white;
`;

export const Menus =  styled.div`
    display:flex;
    justify-content: center;
    background-color:#15a84f;
    outline:none;

    button{
        background-color:#15a84f;
        border:0px;

        &:hover{
                background: ${darken(0.03 , '#86c739')}
        }

    }
    
    
`; 

export const Conteudo = styled.div`
    background-color: #F8F8FF;
`;