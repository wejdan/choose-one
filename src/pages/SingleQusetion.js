import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import React from "react";
function SingleQusetion() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        Choose one
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
        }}
      >
        <FormControl sx={{ marginTop: "1rem" }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", color: "warning.main" }}
                >
                  Go out with your friends on weekends
                </Typography>
              }
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label={
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", color: "warning.main" }}
                >
                  Stay at home on weekends and relax
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
        <Button
          disableElevation
          variant="contained"
          color="error"
          sx={{ marginTop: "2rem", color: "white" }}
        >
          Submit Your Answer
        </Button>
      </Paper>
    </Box>
  );
}

export default SingleQusetion;
