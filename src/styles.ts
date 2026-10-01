import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding-top: 10px;
    box-sizing: border-box;
    font-family: 'inter', sans-serif;
  }
`

export default GlobalStyle;

export const Container = styled.div`
max-width: 1024px;
width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 250px auto;
column-gap: 76px;

@media (max-width: 768px) {
  display: block;
  padding: 0 16px;
}


img {
  max-width: 100%;
}
`
