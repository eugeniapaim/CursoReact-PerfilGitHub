import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragrafo";
import Title from "../../components/Title";
import { Button, Descrição, SidebarContainer } from "./styles";

type props = {
  toggleTheme: () => void;
};

const Sidebar = (props: props) => {

  return (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Title fontSize={20}>Eugênia Paim</Title>
    <Paragraph fontSize={14} tipo="secundario">
      eugeniapaim
    </Paragraph>
    <Descrição fontSize={14} tipo="principal">
      Desenvolvedora Front-End | ReactJS | Angular | TypeScript
    </Descrição>
    <Button onClick={props.toggleTheme}>Trocar tema</Button>
    </SidebarContainer>
  </aside>
  )
}

export default Sidebar;
