import { ThemeProvider } from "styled-components";

import React, { JSX, useState } from "react";
import Sidebar from "./containers/Sidebar";
import About from "./containers/About";
import Projects from "./containers/Projetos";
import GlobalStyle, { Container } from "./styles";
import themeLight from "./themes/light";
import themeDark from "./themes/dark";

function App() {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeProvider theme={theme ? themeDark : themeLight}>
      <GlobalStyle />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
