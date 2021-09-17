import { Dashboard } from "./src/pages/Dashboard";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
export default function App() {
  return (
    /**
     * Disponibilizando thema para toda aplicação
     * Dessa forma nosso tema fica disponival em toda aplicação
     */
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
