import styled from 'styled-components'

export const Container = styled.ul`
    display: flex;
    overflow-y: scroll;
    flex-wrap: nowrap;
    background-color: black;
    justify-content: center;
    @media (min-width: 720px){
        overflow-y: unset;
        flex-wrap: wrap;
        padding: 50px;
    }
    @media (min-width: 1200px){
        padding: 80px;
    }
    @media (min-width: 1500px){
        padding: 100px 180px;
    }
`