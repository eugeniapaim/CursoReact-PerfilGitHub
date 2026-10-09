import styled from "styled-components";
import { Props } from "./index";
import { Theme } from "../../themes/dark";


export const Title = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).backgroundColor ? (props.theme as Theme).principalColor : '#fff'};
  font-size:${(props) => props.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: bold;
  margin-bottom: 16px;
  list-style: none;

`
