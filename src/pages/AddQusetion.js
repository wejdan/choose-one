import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../DATA";
import { addQuestionAction } from "../store/actions/questions";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function AddQusetion() {
  let navigate = useNavigate();

  const user_id = useSelector((store) => store.authedUser);
  const [firstOption, setfirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [openAlert, setOpenAlert] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
    navigate("/");
  };

  const dispatch = useDispatch();
  const handleAddQusetion = () => {
    setLoading(true);
    const newQusetion = {
      creator: user_id,
      answerOne: firstOption,
      answerTwo: secondOption,
    };
    addQuestion(newQusetion).then((qusetion) => {
      dispatch(addQuestionAction(qusetion));
      setOpenAlert(true);
      setLoading(false);
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
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your Qusetion Was Submitted
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
          value={firstOption}
          onChange={(e) => {
            setfirstOption(e.target.value);
          }}
        />
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          label="Option 2"
          variant="standard"
          value={secondOption}
          onChange={(e) => {
            setSecondOption(e.target.value);
          }}
        />
        <Button
          disableElevation
          variant="contained"
          color="error"
          sx={{ marginTop: "3rem", color: "white" }}
          disabled={firstOption == "" || secondOption == ""}
          onClick={() => {
            handleAddQusetion();
          }}
        >
          Submit Your Qusetion
        </Button>
      </Paper>
    </Box>
  );
}

export default AddQusetion;
