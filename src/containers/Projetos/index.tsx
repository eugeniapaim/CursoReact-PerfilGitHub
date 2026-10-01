import Title from "../../components/Title";
import Projectos from "../../components/Projetos";
import { List } from "./styles";

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <Projectos />
      </li>
      <li>
        <Projectos />
      </li>
      <li>
        <Projectos />
      </li>
      <li>
        <Projectos />
      </li>
      <li>
        <Projectos />
      </li>
      <li>
        <Projectos />
      </li>
    </List>
  </section>
);

export default Projects;
