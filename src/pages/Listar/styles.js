import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    height:100%;
    display:grid;
    grid-template-rows:0.5fr 8fr;
`; 

export const Header = styled.div`

            display:flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-top:1vh;
            
            input{
                margin-bottom: 10px;
                border: 1px solid #86c739;
                height: 40px;
                width: 250px;
                left: 50px;
                color: green;
                background: white;
                border-radius: 20px;
                text-align: center;

                &::placeholder{
                    color:grey;
                }

                &:invalid{
                    box-shadow: 0 0 5px 1px #86c739;
                }        
            }

            button{
                color: white;
                border-radius: 20px;
                font-size:16px;
                font-weight:400;
                border:0;
                background-color: #86c739;
                
                
                height: 40px;
                    
                &:hover{
                    background: ${darken(0.05 , '#86c739')}
                }

                &:focus{
                    background:${darken(0.09 , '#86c739')};
                }
            }

          

            @media(max-width: 1730px){
                input,button{
                    margin-top:1vh;
                    margin-bottom:1vh;
                    margin-left:0.5vw;
                    margin-right:0.5vw;
                    padding-top:0.5vh;
                    padding-bottom:0.5vh;
                    padding-left:1vw;
                    padding-right:1vw;
                }
            }
            
`;

export const Lista = styled.div`
    display:grid;
    grid-auto-flow: row;
    grid-template-columns: 20vw 20vw 20vw ;
    grid-template-rows: 100px 100px 100px ;
    justify-content: center;
    grid-gap:2vw;
    margin-top:1vh;
`;

export const Documento = styled.article`
    
    display:flex;
    flex-direction:column;
    align-items:left;
    

    border: 1px solid #ddd;
    background-color:white;
    

    strong{
        margin-top:1vh;
        margin-left:2vw;
    }

    p{
        margin-top:1vh;
        margin-left:2vw;
        margin-right:1vw;
    }
   
`;

export const BotoesLista = styled.div`
    
    display:flex;
    justify-content:center;

    padding-top:1vh;
    padding-bottom:1vh;
    padding-left:1vw;
    padding-right:1vw;
    
    margin-left:25vw;
    margin-right:25vw;
    margin-top:1vh;

    button{
        color: white;
        border-radius: 20px;
        font-size:12px;
        font-weight:400;
        border:0;
        background-color: #86c739;
        margin-left:1vw;
        margin-right:1vw;
        padding-top:1vh;
        padding-bottom:1vh;
        padding-left:1vw;
        padding-right:1vw;
            
        &:hover{
            background: ${darken(0.05 , '#86c739')}
        }

        &:focus{
            background:${darken(0.09 , '#86c739')};
        }
    }
`;