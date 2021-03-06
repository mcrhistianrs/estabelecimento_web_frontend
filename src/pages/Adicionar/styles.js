import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    display:flex;
    justify-content:center;
`;

export const Conteudo = styled.div`
    width:100%;
    max-width:315px;
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:5vh;

        select,input{
            margin-bottom: 10px;
            border: 1px solid #86c739;
            height: 40px;
            width: 250px;
            left: 50px;
            color: green;
            background: white;
            border-radius: 20px;
            text-align: center;
            text-align-last: center;
            option{
                text-align: center;
            }

            &::placeholder{
                color:grey;
            }

            &:invalid{
                box-shadow: 0 0 5px 1px #86c739;
            }
            
        }

        button{
            background-color: #86c739;
            align-items: center;
            justify-content: center;
            color: white;
            height: 40px;
            width: 250px;
            border-radius: 20px;
            font-size:16px;
            font-weight:400;
            border:0;

                        
            &:hover{
                background: ${darken(0.03 , '#86c739')}
            }


            
        }
    }
`