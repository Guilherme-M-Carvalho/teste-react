import { ThemeProvider } from "styled-components";
import { THEME } from "./styles/theme";
import { Pages } from "./pages";
import { ProductsProvider } from "./contexts/productsContext";

function App() {

  return (<ProductsProvider>
    <ThemeProvider theme={THEME} >
      <Pages />
    </ThemeProvider>
  </ProductsProvider>)
}

export default App
