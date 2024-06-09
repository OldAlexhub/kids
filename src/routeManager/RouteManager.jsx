import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../routes/Home";
import Login from "../routes/Login";
import LessonOne from "../lessons/Lesson1";
import LessonTwo from "../lessons/Lesson2";
import LessonThree from "../lessons/Lesson3";
import LessonFour from "../lessons/Lesson4";
import LessonFive from "../lessons/Lesson5";
import QuizOne from "../quizes/QuizOne";
import QuizTwo from "../quizes/QuizTwo";
import QuizThree from "../quizes/QuizThree";
import QuizFour from "../quizes/QuizFour";
import QuizFive from "../quizes/QuizFive";
import Media from "../routes/Media";
import ProtectedRoute from "../components/ProtectRoute";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="lessonOne"
            element={
              <ProtectedRoute>
                <LessonOne />
              </ProtectedRoute>
            }
          />
          <Route
            path="lessonTwo"
            element={
              <ProtectedRoute>
                <LessonTwo />
              </ProtectedRoute>
            }
          />
          <Route
            path="lessonThree"
            element={
              <ProtectedRoute>
                <LessonThree />
              </ProtectedRoute>
            }
          />
          <Route
            path="lessonFour"
            element={
              <ProtectedRoute>
                <LessonFour />
              </ProtectedRoute>
            }
          />
          <Route
            path="lessonFive"
            element={
              <ProtectedRoute>
                <LessonFive />
              </ProtectedRoute>
            }
          />
          <Route
            path="quizOne"
            element={
              <ProtectedRoute>
                <QuizOne />
              </ProtectedRoute>
            }
          />
          <Route
            path="quizTwo"
            element={
              <ProtectedRoute>
                <QuizTwo />
              </ProtectedRoute>
            }
          />
          <Route
            path="quizThree"
            element={
              <ProtectedRoute>
                <QuizThree />
              </ProtectedRoute>
            }
          />
          <Route
            path="quizFour"
            element={
              <ProtectedRoute>
                <QuizFour />
              </ProtectedRoute>
            }
          />
          <Route
            path="quizFive"
            element={
              <ProtectedRoute>
                <QuizFive />
              </ProtectedRoute>
            }
          />
          <Route
            path="media"
            element={
              <ProtectedRoute>
                <Media />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
