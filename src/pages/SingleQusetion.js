import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function SingleQusetion() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const qusetions = useSelector((store) => store.qusetions);

  const users = useSelector((store) => store.users);
  const user_id = useSelector((store) => store.authedUser);

  const [value, setValue] = React.useState("");
  let question = {
    firstOption: {},
    secondOption: {},
  };
  let isAnswered;
  let totalAnswers;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const isQusetionAnswered = (qusetionId) => {
    let current_user;
    Object.keys(users).map((key) => {
      if (users[key].id == user_id) {
        current_user = users[key];
      }
    });
    console.log(current_user.answers);
    return current_user.answers.hasOwnProperty(qusetionId);
  };

  if (Object.keys(qusetions).length) {
    if (qusetions[id]) {
      question = qusetions[id];
      isAnswered = isQusetionAnswered(id);
      totalAnswers = 0;
    }
  } else {
    return <p>qusetion was not found</p>;
  }

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
              value="firstOption"
              control={<Radio />}
              label={
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", color: "warning.main" }}
                >
                  {question.firstOption.string}
                </Typography>
              }
            />
            <FormControlLabel
              value="secondOption"
              control={<Radio />}
              label={
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", color: "warning.main" }}
                >
                  {question.secondOption.string}
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
