import styled from 'styled-components'

export const Container = styled.li`
    box-sizing: border-box;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    flex-direction: column;
    margin: 10px;
    font-family: roboto;
    margin: 5px;
    background-color: #42413d;
    min-height: 506px;
    height: 100%;
    img{
        border-radius: 10px;
        margin: 5px 5px;
        height: 285px;
        width:270px;
    }
    h4{ 
        margin-top: 5px;
        font-weight: 700;
    }
    h5{
        font-weight: 700;
        font-size: 16px;
    };
    h5, p{
        margin: 5px;
        color: #b2afac  ;
    }
    p{
        font-size: 12px;
    }
    h4{
        color: white;
    }
    span{
    
        justify-content: space-around;
        flex-direction: column;
        display:flex;
        height: 50%;
    }
    button:hover{
        border: solid black 2px;
    }
    button{
        font-weight: 700;
        font-size: 14px;
        width: 80%;
        border-radius: 6px;
        background-color: #FFCE2b;
        border-style: none;
        height: 40px;
        margin: 10px;
    }
    @media (min-width: 1200px){
        margin: 20px;
    }


`