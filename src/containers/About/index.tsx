import Title from "../../components/Title";
import Paragraph from "../../components/Paragrafo";
import { GithubSection } from "./styles";

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragraph>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=eugeniapaim&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="eugeniapaim"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=eugeniapaim&layout=compact&langs_count=7&theme=dracula"
          alt="eugeniapaim"
        />
      </GithubSection>
    </section>
  );
};

export default About;
