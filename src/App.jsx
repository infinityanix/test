import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutContainer from "./pages/about/AboutContainer";
import HomeContainer from "./pages/home/HomeContainer";
import Download from "../src/pages/download/view/download";
import NotFoundContainer from "./pages/notfound/NotFoundContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route path="*" component={NotFoundContainer} />
        <Route path="/download" component={Download} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
