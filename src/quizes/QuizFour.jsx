import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const quizQuestions = [
  {
    question: "Pronounce the letter 'ش'?",
    options: ["Sheen", "SSAD", "DDAD", "TTAH"],
    answer: "Sheen",
  },
  {
    question: "Pronounce the letter 'ص'?",
    options: ["Sheen", "SSAD", "DDAD", "TTAH"],
    answer: "SSAD",
  },
  {
    question: "Pronounce the letter 'ض'?",
    options: ["Sheen", "SSAD", "DDAD", "TTAH"],
    answer: "DDAD",
  },
  {
    question: "Pronounce the letter 'ط'?",
    options: ["Sheen", "SSAD", "DDAD", "TTAH"],
    answer: "TTAH",
  },
  {
    question: "What is this number '١٦'?",
    options: ["Seta Ashara", "Sab'a Ashra", "Thamanya Ashara", "Tes'aa Ashara"],
    answer: "Seta Ashara",
  },
  {
    question: "What is this number '١٧'?",
    options: ["Seta Ashara", "Sab'a Ashra", "Thamanya Ashara", "Tes'aa Ashara"],
    answer: "Sab'a Ashra",
  },
  {
    question: "What is this number '١٨'?",
    options: ["Seta Ashara", "Sab'a Ashra", "Thamanya Ashara", "Tes'aa Ashara"],
    answer: "Thamanya Ashara",
  },
  {
    question: "What is this number '١٩'?",
    options: ["Seta Ashara", "Sab'a Ashra", "Thamanya Ashara", "Tes'aa Ashara"],
    answer: "Tes'aa Ashara",
  },
  {
    question: "What is this number '٢٠'?",
    options: ["Seta Ashara", "Sab'a Ashra", "Thamanya Ashara", "Eshreen"],
    answer: "Eshreen",
  },
  {
    question: "Which letter is 'ص'?",
    options: ["Sheen", "SSAD", "DDAD", "TTAH"],
    answer: "SSAD",
  },
];

const QuizFour = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showScore) {
      updateScore();
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

  const updateScore = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in local storage.");
      return;
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_UPDATE}/${userId}`,
        { score }
      );

      if (response.status === 200) {
        console.log("Score updated successfully:", response.data);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        console.error("Failed to update score:", response.status);
      }
    } catch (error) {
      console.error("Error updating score:", error);
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

export default QuizFour;
