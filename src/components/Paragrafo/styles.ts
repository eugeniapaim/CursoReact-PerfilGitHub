import styled from "styled-components";
import { Props } from "./index";
import { Theme } from "../../themes/dark";

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? (props.theme as Theme).principalColor : (props.theme as Theme).secondaryColor)};
  font-size:${(props) => props.fontSize ? props.fontSize + 'px' : '14px'};
  line-height: 22px;
  list-style: none;
`
