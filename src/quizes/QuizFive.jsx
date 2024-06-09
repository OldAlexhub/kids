import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const quizQuestions = [
  {
    question: "Pronounce the letter 'ظ'?",
    options: ["Zah", "EIN", "GHEEN", "FEH"],
    answer: "Zah",
  },
  {
    question: "Pronounce the letter 'ع'?",
    options: ["Zah", "EIN", "GHEEN", "FEH"],
    answer: "EIN",
  },
  {
    question: "Pronounce the letter 'غ'?",
    options: ["Zah", "EIN", "GHEEN", "FEH"],
    answer: "GHEEN",
  },
  {
    question: "Pronounce the letter 'ف'?",
    options: ["Zah", "EIN", "GHEEN", "FEH"],
    answer: "FEH",
  },
  {
    question: "Pronounce the letter 'ق'?",
    options: ["QAH", "KAF", "LAM", "MEEM"],
    answer: "QAH",
  },
  {
    question: "Pronounce the letter 'ك'?",
    options: ["QAH", "KAF", "LAM", "MEEM"],
    answer: "KAF",
  },
  {
    question: "Pronounce the letter 'ل'?",
    options: ["QAH", "KAF", "LAM", "MEEM"],
    answer: "LAM",
  },
  {
    question: "Pronounce the letter 'م'?",
    options: ["NOON", "HEH", "WOW", "MEEM"],
    answer: "MEEM",
  },
  {
    question: "Pronounce the letter 'ن'?",
    options: ["NOON", "HEH", "WOW", "MEEM"],
    answer: "NOON",
  },
  {
    question: "Pronounce the letter 'ه'?",
    options: ["NOON", "HEH", "WOW", "YEAA"],
    answer: "HEH",
  },
  {
    question: "Pronounce the letter 'و'?",
    options: ["NOON", "HEH", "WOW", "YEAA"],
    answer: "WOW",
  },
  {
    question: "Pronounce the letter 'ى'?",
    options: ["NOON", "HEH", "WOW", "YEAA"],
    answer: "YEAA",
  },
];

const QuizFive = () => {
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

export default QuizFive;
