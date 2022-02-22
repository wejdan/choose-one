import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

function AddQusetion() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginY: "3rem",

          fontWeight: "800",
          color: "primary.main",
        }}
      >
        Add Qusetion
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "info.main",
          paddingTop: "3rem",
        }}
      >
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          label="Option 1"
          variant="standard"
        />
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          label="Option 2"
          variant="standard"
        />
        <Button
          disableElevation
          variant="contained"
          color="error"
          sx={{ marginTop: "3rem", color: "white" }}
        >
          Submit Your Qusetion
        </Button>
      </Paper>
    </Box>
  );
}

export default AddQusetion;
