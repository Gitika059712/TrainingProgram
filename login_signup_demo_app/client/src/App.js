import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#64b5f6",
      main: "#42a5f5",
      dark: "#2196f3",
      contrastText: "#fff"
    },
    secondary: {
      light: "#EF9A9A",
      main: "#F44336",
      dark: "#C62828",
      contrastText: "#000"
    },
    openTitle: blue["400"],
    protectTitle: green["400"],
    type: "dark"
  }
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
