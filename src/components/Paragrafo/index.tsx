import {P} from './styles'


export type Props = {
  children: string;
  tipo?:string;
  fontSize?: number;
};

const Paragraph = ({children, tipo, fontSize}: Props) =>
    <P fontSize={fontSize} tipo={tipo}>
      {children}
    </P>


export default Paragraph;
