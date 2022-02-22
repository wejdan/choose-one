import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../store/actions/authedUser";

function Login() {
  const user_id = useSelector((store) => store.authedUser);
  const users = useSelector((store) => store.users);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [user, setUser] = React.useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
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
        Login As
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
          paddingTop: "1.5rem",
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={user}
            onChange={handleChange}
            label="user"
          >
            {Object.keys(users).map((key) => {
              return (
                <MenuItem key={users[key].id} value={users[key].id}>
                  {users[key].fullname}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          disableElevation
          variant="contained"
          color="error"
          sx={{ marginTop: "1.2rem", color: "white", minWidth: 100 }}
          onClick={() => {
            dispatch(setAuthedUser(user));
            navigate("/");
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
