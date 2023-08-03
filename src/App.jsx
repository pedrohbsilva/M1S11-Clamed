import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global-styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
