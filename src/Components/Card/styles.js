import styled from 'styled-components'

export const Container = styled.li`
    display: flex;
    width: 85%;
    flex-direction: column;
    margin: 10px;
    font-family: roboto;
    img{
        height: 330px;
        width: 210px;
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

`