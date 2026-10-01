import Paragraph from "../Paragrafo";
import Title from "../Title";
import styled from "styled-components";
import { Card, LinkBotao } from "./styles";


const Projectos = () => {
  return (
    <Card>
      <Title fontSize={16}>Projetos</Title>
      <Paragraph tipo="secundario" >
        Aqui estão alguns dos meus projetos mais recentes.
      </Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  );
};

export default Projectos;
