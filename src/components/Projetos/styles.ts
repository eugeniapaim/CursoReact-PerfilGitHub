import styled from "styled-components";
import { Theme } from "../../themes/dark";


export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).borderColor};
  border-radius: 4px;
  padding: 16px;
  list-style: none;
  margin-left: none;
`

export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as Theme).backgroundColor};
  background-color: ${(props) => (props.theme as Theme).backgroundButtonColor};
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  margin-top: 16px;
  `
