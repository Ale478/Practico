import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`

export const Header = styled.h1`
    /*color: ${(props) => props.theme.color};*/
    color: ${({theme}) => theme.color};
    font-size: 3rem;
    font-family: 'sans-serif';
    
`

export const HeaderSecundario = styled.h2`
    color: ${(props) => props.theme.subColor};
    font-size : 2rem;
    font-family: 'sans-serif';
`