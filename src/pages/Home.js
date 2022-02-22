import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Tabs from "../components/Tabs";
function Home() {
  const qusetions = useSelector((store) => store.qusetions);

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
