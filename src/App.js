import { ThemeProvider } from "styled-components";
import "./App.css";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
