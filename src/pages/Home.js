import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function Home() {
  const qusetions = useSelector((store) => store.qusetions);
  const users = useSelector((store) => store.users);
  const user_id = useSelector((store) => store.authedUser);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
  isQusetionAnswered();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",

        justifyContent: "center",
        backgroundColor: "info.main",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,

          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Tab label="Answered" {...a11yProps(0)} />
          <Tab label="Unanswered" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <List>
            {Object.keys(qusetions).map((key) => {
              if (isQusetionAnswered(qusetions[key].id)) {
                return (
                  <ListItem
                    key={qusetions[key].id}
                    component={Link}
                    to={`/qusetion/${qusetions[key].id}`}
                  >
                    {" "}
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "600", color: "warning.main" }}
                        >
                          {qusetions[key].firstOption.string} or $
                          {qusetions[key].secondOption.string}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              }
            })}
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {Object.keys(qusetions).map((key) => {
            if (isQusetionAnswered(qusetions[key].id) == false) {
              return (
                <ListItem
                  key={qusetions[key].id}
                  component={Link}
                  to={`/qusetion/${qusetions[key].id}`}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "600", color: "warning.main" }}
                      >
                        {qusetions[key].firstOption.string} or{" "}
                        {qusetions[key].secondOption.string}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            }
          })}
        </TabPanel>
      </Box>
    </Box>
  );
}

export default Home;
