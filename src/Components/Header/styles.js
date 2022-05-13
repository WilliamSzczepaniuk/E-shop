import styled from 'styled-components'

export const Container = styled.header`
background-color: black;
display: flex;
justify-content: space-between;
width: 100%;
    button{
        background-color: #FFCE2b;
        margin: 10px;
        height: 26px;
        border-radius: 8px;
        border-style: none;
        width: 80px;
        font-weight: 600;
    }

    h1{
        color: #FFCE2b;
        font-size: 24px;
        margin: 10px;
    }
    strong{
        color: white;
    }
    @media (min-width: 1200px){
        h1{
            font-size: 30px;
        }
        button{
            font-size: 18px;
            height: 36px;
        }
    }
  

    



`