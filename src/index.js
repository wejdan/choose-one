import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./layout/Theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import store from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
