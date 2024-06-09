import React from "react";
import zahAudio from "../images/letters_audio/ظ.mp3";
import enAudio from "../images/letters_audio/ع.mp3";
import genAudio from "../images/letters_audio/غ.mp3";
import fehAudio from "../images/letters_audio/ف.mp3";
import qafhAudio from "../images/letters_audio/ق.mp3";
import kafAudio from "../images/letters_audio/ك.mp3";
import lamAudio from "../images/letters_audio/ل.mp3";
import memAudio from "../images/letters_audio/م.mp3";
import noonAudio from "../images/letters_audio/ن.mp3";
import hehAudio from "../images/letters_audio/ه.mp3";
import wowAudio from "../images/letters_audio/و.mp3";
import yeahAudio from "../images/letters_audio/ي.mp3";
import zahImage from "../images/letters_images/ظ.png";
import enImage from "../images/letters_images/ع.png";
import genImage from "../images/letters_images/غ.png";
import fehImage from "../images/letters_images/ف.png";
import qafImage from "../images/letters_images/ق.png";
import kafImage from "../images/letters_images/ك.png";
import lamImage from "../images/letters_images/ل.png";
import memImage from "../images/letters_images/م.png";
import nonImage from "../images/letters_images/ن.png";
import hehImage from "../images/letters_images/ه.png";
import wowImage from "../images/letters_images/و.png";
import yeahImage from "../images/letters_images/ي.png";

import { useNavigate } from "react-router-dom";

const letters = [
  { name: "ظ", englishName: "Zah", audio: zahAudio, image: zahImage },
  { name: "ع", englishName: "EIN", audio: enAudio, image: enImage },
  { name: "غ", englishName: "GHEEN", audio: genAudio, image: genImage },
  { name: "ف", englishName: "FEH", audio: fehAudio, image: fehImage },
  { name: "ق", englishName: "QAH", audio: qafhAudio, image: qafImage },
  { name: "ك", englishName: "KAF", audio: kafAudio, image: kafImage },
  { name: "ل", englishName: "LAM", audio: lamAudio, image: lamImage },
  { name: "م", englishName: "MEEM", audio: memAudio, image: memImage },
  { name: "ن", englishName: "NOON", audio: noonAudio, image: nonImage },
  { name: "ه", englishName: "HEH", audio: hehAudio, image: hehImage },
  { name: "و", englishName: "WOW", audio: wowAudio, image: wowImage },
  { name: "ى", englishName: "YEAA", audio: yeahAudio, image: yeahImage },
];

const playAudio = (audio) => {
  new Audio(audio).play();
};

const Lesson5 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quizFive");
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

export default Lesson5;
