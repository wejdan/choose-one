import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddAnswer } from "../store/actions/questions";
import { addAnswerToQuestion } from "../DATA";
import Loading from "../components/Loading";
function SingleQusetion() {
  const [openAlert, setOpenAlert] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const qusetions = useSelector((store) => store.qusetions);

  const users = useSelector((store) => store.users);
  const user_id = useSelector((store) => store.authedUser);
  const [value, setValue] = React.useState("");
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [isQusetionExisit, setIsQusetionExisit] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const calclatePrecentage = (option) => {
    let total =
      qusetions[id].firstOption.votes.length +
      qusetions[id].secondOption.votes.length;
    return (qusetions[id][option].votes.length / total) * 100;
  };

  React.useEffect(() => {
    if (qusetions[id]) {
      if (isQusetionExisit == false) {
        setIsQusetionExisit(true);
      }
    } else {
      setIsQusetionExisit(false);
    }
    let current_user = users[user_id];

    if (current_user.answers.hasOwnProperty(id)) {
      setIsAnswered(true);
      setValue(current_user.answers[id]);
    }
  }, []);

  const handleAnswerQuestion = () => {
    setLoading(true);
    const objAnswer = { answer: value, authedUser: user_id, questionId: id };
    dispatch(AddAnswer(objAnswer));

    addAnswerToQuestion(objAnswer).then(() => {
      setLoading(false);

      setIsAnswered(true);
      setOpenAlert(true);
    });
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
      {isLoading && <Loading />}
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your Answer Was Submitted
        </Alert>
      </Snackbar>
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
        {isQusetionExisit ? (
          <React.Fragment>
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
                      {qusetions[id].firstOption.string}{" "}
                    </Typography>
                  }
                />
                <Typography
                  textAlign="right"
                  sx={{ color: "success.main" }}
                  variant="caption"
                >
                  {isAnswered && calclatePrecentage("firstOption").toFixed(2)}%
                </Typography>
                <FormControlLabel
                  value="secondOption"
                  control={<Radio />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600", color: "warning.main" }}
                    >
                      {qusetions[id].secondOption.string}{" "}
                    </Typography>
                  }
                />
                <Typography
                  textAlign="right"
                  sx={{ color: "success.main" }}
                  variant="caption"
                >
                  {isAnswered && calclatePrecentage("secondOption").toFixed(2)}%
                </Typography>
              </RadioGroup>
            </FormControl>
            <Button
              disableElevation
              disabled={isAnswered || !value}
              variant="contained"
              color="error"
              sx={{ marginTop: "2rem", color: "white" }}
              onClick={() => handleAnswerQuestion()}
            >
              Submit Your Answer
            </Button>
          </React.Fragment>
        ) : (
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", color: "warning.main" }}
          >
            Qusetion not found
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default SingleQusetion;
