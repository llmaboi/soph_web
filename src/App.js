import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import About from "./components/about";
import Believe from "./components/believe";
import Education from "./components/education";
import Home from "./components/home";
import NotFound from "./components/404.js";
import "./styles/tailwind.css";
import { ThemeProvider } from "./components/shared/themeContext";
import { Photography } from "./components/photography";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Believe} path="/believe" />
          <Route component={Education} path="/education" />
          <Route component={Photography} path="/photography" />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
