import React from "react";
import alefAudio from "../images/letters_audio/ج.mp3";
import behAudio from "../images/letters_audio/ح.mp3";
import tehAudio from "../images/letters_audio/خ.mp3";
import thehAudio from "../images/letters_audio/د.mp3";
import alefImage from "../images/letters_images/ج.png";
import behImage from "../images/letters_images/ح.png";
import tehImage from "../images/letters_images/خ.png";
import thehImage from "../images/letters_images/د.png";
import oneAudio from "../images/numbers_audio/6.mp3";
import twoAudio from "../images/numbers_audio/7.mp3";
import threeAudio from "../images/numbers_audio/8.mp3";
import fourAudio from "../images/numbers_audio/9.mp3";
import fiveAudio from "../images/numbers_audio/10.mp3";
import oneImage from "../images/numerals_images/6.png";
import twoImage from "../images/numerals_images/7.png";
import threeImage from "../images/numerals_images/8.png";
import fourImage from "../images/numerals_images/9.png";
import fiveImage from "../images/numerals_images/10.png";
import { useNavigate } from "react-router-dom";

const letters = [
  { name: "ج", englishName: "Geem", audio: alefAudio, image: alefImage },
  { name: "ح", englishName: "Hah", audio: behAudio, image: behImage },
  { name: "خ", englishName: "Khah", audio: tehAudio, image: tehImage },
  { name: "د", englishName: "Dal", audio: thehAudio, image: thehImage },
];

const numbers = [
  { name: "6", englishName: "Seta", audio: oneAudio, image: oneImage },
  { name: "7", englishName: "Sab'a", audio: twoAudio, image: twoImage },
  { name: "8", englishName: "Thamanya", audio: threeAudio, image: threeImage },
  { name: "9", englishName: "Tes'aa", audio: fourAudio, image: fourImage },
  { name: "10", englishName: "Ashara", audio: fiveAudio, image: fiveImage },
];

const playAudio = (audio) => {
  new Audio(audio).play();
};

const Lesson2 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quizTwo");
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h4
          className="display-5"
          style={{
            color: "#ff6f61",
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
          }}
        >
          Letters
        </h4>
      </div>
      <div className="row">
        {letters.map((letter, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div
              className="card text-center h-100"
              style={{ backgroundColor: "#ffebcd", borderRadius: "15px" }}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <img
                  src={letter.image}
                  alt={`Letter ${letter.name}`}
                  className="img-fluid mb-2"
                  style={{ maxHeight: "150px", borderRadius: "10px" }}
                />
                <h5
                  className="card-title"
                  style={{
                    color: "#ff6f61",
                    fontFamily: "Comic Sans MS, Comic Sans, cursive",
                  }}
                >
                  {letter.englishName} ({letter.name})
                </h5>
                <button
                  onClick={() => playAudio(letter.audio)}
                  className="btn btn-primary mt-auto"
                  style={{
                    backgroundColor: "#ff6f61",
                    borderColor: "#ff6f61",
                    borderRadius: "15px",
                  }}
                >
                  Play {letter.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-4">
        <h4
          className="display-5"
          style={{
            color: "#ff6f61",
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
          }}
        >
          Numbers
        </h4>
      </div>
      <div className="row">
        {numbers.map((number, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div
              className="card text-center h-100"
              style={{ backgroundColor: "#ffebcd", borderRadius: "15px" }}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <img
                  src={number.image}
                  alt={`Number ${number.name}`}
                  className="img-fluid mb-2"
                  style={{ maxHeight: "150px", borderRadius: "10px" }}
                />
                <h5
                  className="card-title"
                  style={{
                    color: "#ff6f61",
                    fontFamily: "Comic Sans MS, Comic Sans, cursive",
                  }}
                >
                  {number.englishName} ({number.name})
                </h5>
                <button
                  onClick={() => playAudio(number.audio)}
                  className="btn btn-primary mt-auto"
                  style={{
                    backgroundColor: "#ff6f61",
                    borderColor: "#ff6f61",
                    borderRadius: "15px",
                  }}
                >
                  Play {number.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-success btn-lg"
          style={{
            backgroundColor: "#28a745",
            borderColor: "#28a745",
            borderRadius: "15px",
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
          }}
          onClick={handleClick}
        >
          Ready to Take the Quiz?
        </button>
      </div>
    </div>
  );
};

export default Lesson2;
