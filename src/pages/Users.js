import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import User from "../components/User";
function Users() {
  const users = useSelector((store) => store.users);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",

        backgroundColor: "info.main",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginY: "3rem", fontWeight: "700", color: "warning.main" }}
      >
        Top Users
      </Typography>
      <Paper sx={{ padding: "3rem" }}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          {Object.keys(users).map((key) => {
            return (
              <Grid key={users[key].id} item>
                <User {...users[key]} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
}

export default Users;
