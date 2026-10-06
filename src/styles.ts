import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding-top: 10px;
    box-sizing: border-box;
    font-family: 'inter', sans-serif;
    list-style: none;

  }

  body {
    padding-bottom: 80px;
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
list-style: none;

@media (max-width: 768px) {
  display: block;
  padding: 0 16px;
}


img {
  max-width: 100%;
}
`
