import { Box } from "@mui/system";
import React from "react";
import Tabs from "../components/Tabs";
function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",

        justifyContent: "center",
        backgroundColor: "info.main",
      }}
    >
      <Tabs />
    </Box>
  );
}

export default Home;
