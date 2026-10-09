import styled from 'styled-components';
import { P } from '../../components/Paragrafo/styles';
import { Theme } from '../../themes/dark';

export const Descrição = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const Button = styled.button`
  background-color: ${(props) => (props.theme as Theme).backgroundButtonColor};
  color: ${(props) => (props.theme as Theme).backgroundColor};
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #44475a;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
