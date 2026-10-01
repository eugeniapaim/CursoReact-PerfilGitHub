import {P} from './styles'


export type Props = {
  children: string;
  tipo?:string;
};

const Paragraph = ({children, tipo}: Props) =>
    <P>
      {children}
    </P>


export default Paragraph;
