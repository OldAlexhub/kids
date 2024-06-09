import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const quizQuestions = [
  {
    question: "Pronounce the letter 'ا'?",
    options: ["Alef", "Beh", "Teh", "Theh"],
    answer: "Alef",
  },
  {
    question: "Pronounce the letter 'ث'?",
    options: ["Alef", "Beh", "Teh", "Theh"],
    answer: "Theh",
  },
  {
    question: "What is this number '٢'?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two",
  },
  {
    question: "Pronounce the letter 'ب'?",
    options: ["Alef", "Beh", "Teh", "Theh"],
    answer: "Beh",
  },
  {
    question: "What is this number '٣'?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Three",
  },

  {
    question: "What is this number '١'?",
    options: ["One", "Two", "Three", "Four"],
    answer: "One",
  },

  {
    question: "What is this number '٥'?",
    options: ["One", "Two", "Three", "Five"],
    answer: "Five",
  },
  {
    question: "Which letter is 'ت'?",
    options: ["Alef", "Beh", "Teh", "Theh"],
    answer: "Teh",
  },
  {
    question: "What is this number '٤'?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Four",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showScore) {
      postScore();
    }
  }, [showScore]);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const postScore = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in local storage.");
      return;
    }

    try {
      const response = await axios.post(process.env.REACT_APP_POST, {
        userId,
        score,
      });

      if (response.status === 201) {
        console.log("Score posted successfully:", response.data);
      } else {
        console.error("Failed to post score:", response.status);
      }

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error posting score:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="card text-center"
            style={{ borderRadius: "15px", backgroundColor: "#ffebcd" }}
          >
            <div className="card-body">
              {showScore ? (
                <div>
                  <h2
                    style={{
                      color: "#ff6f61",
                      fontFamily: "Comic Sans MS, Comic Sans, cursive",
                    }}
                  >
                    You scored {score} out of {quizQuestions.length}
                  </h2>
                </div>
              ) : (
                <>
                  <div>
                    <h4
                      style={{
                        color: "#ff6f61",
                        fontFamily: "Comic Sans MS, Comic Sans, cursive",
                      }}
                    >
                      {quizQuestions[currentQuestion].question}
                    </h4>
                  </div>
                  <div className="mt-3">
                    {quizQuestions[currentQuestion].options.map(
                      (option, index) => (
                        <button
                          key={index}
                          className="btn btn-primary btn-block mb-2"
                          style={{
                            backgroundColor: "#ff6f61",
                            borderColor: "#ff6f61",
                            borderRadius: "15px",
                          }}
                          onClick={() => handleAnswerOptionClick(option)}
                        >
                          {option}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
