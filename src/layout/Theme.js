import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#800080",
    },
    secondary: {
      main: "#6c757d",
    },
    success: {
      main: "#CCCA14",
    },
    info: {
      main: "#fcf5ff",
    },
    warning: {
      main: "#070a39",
    },
    error: {
      main: "#28a745",
    },
  },
  typography: {
    fontFamily: ["Baloo 2", "serif"].join(","),
  },
});

export default theme;
