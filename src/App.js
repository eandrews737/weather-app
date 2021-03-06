import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import WeatherPageComponent from "./Components/weather-page-component";
import HeaderComponent from "./Components/header-component";
import FooterComponent from "./Components/footer-component";
import NotfoundComponent from "./Components/not-found-component";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FA991C" },
    secondary: { main: "#FC4445" },
    thirdary: "#eeeeee",
    fourthary: "#eeeeee"
  },
  status: {
    danger: "orange"
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router basename="/">
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={WeatherPageComponent} />
            <Route component={NotfoundComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
