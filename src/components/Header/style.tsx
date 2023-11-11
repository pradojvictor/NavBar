import styled from "styled-components";

export const WrapperHeader = styled.header`
    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(35, 35, 46, 0.6);
        height: 8vh;
        *{
            color: white;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
            transition: 0.3s;
            :hover{
                opacity:0.7;
            }
        }
    }
    h1{  
        font-size: 24px;
        text-transform: uppercase;  
        letter-spacing: 4px; 
    }
   ul{
        list-style: none;
        display: flex;
   }
   li{
        letter-spacing: 3px;
        margin-left: 32px;
   }
   .mobile_menu {
        display: none;
        cursor: pointer;

        div{
            width: 32px;
            height: 2px;
            background: rgba(255, 255, 255, 1);
            margin: 8px;
        }
   }
   
   @media (max-width: 720px) {
        
        ul{
            position: absolute;
            top: 8vh;
            right: 0;
            width: 70vw;
            height: 92vh;
            background: rgba(35, 35, 46, 0.6);
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            transform: translateX(100%);
        }
        li{
            margin-left: 0;
            opacity: 100; //use 100 para mostrar
        }
        .mobile_menu{
            display: block;
        }
        ul.active {
            transform: translate(0)
        }
   }
   
`;