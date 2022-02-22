import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import SingleQustion from "./pages/SingleQusetion";
import AddQusetion from "./pages/AddQusetion";
import Login from "./pages/Login";

import Navbar from "./layout/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "./store/actions/users";
import { loadQuestions } from "./store/actions/questions";
import { getAllUsers, getAllQuestions } from "./DATA";

function App() {
  const dispatch = useDispatch();

  const loadAllUsers = async () => {
    const response = await getAllUsers();
    console.log(response);

    dispatch(loadUsers(response));
  };
  const loadAllQusetions = async () => {
    const response = await getAllQuestions();
    console.log(response);

    dispatch(loadQuestions(response));
  };
  useEffect(async () => {
    loadAllUsers();
    loadAllQusetions();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Home />} />

          <Route path="/users" element={<Users />} />

          <Route path="/add" element={<AddQusetion />} />

          <Route path="/qusetion/:id" element={<SingleQustion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
