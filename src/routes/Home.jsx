import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const name = localStorage.getItem("name");
  const sora = localStorage.getItem("image");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center text-center mb-4">
        <div className="col-lg-8">
          <h1
            className="display-4"
            style={{
              color: "#ff6f61",
              fontFamily: "Comic Sans MS, Comic Sans, cursive",
            }}
          >
            Welcome {name}
          </h1>
          <h2
            className="h4"
            style={{
              color: "#ff6f61",
              fontFamily: "Comic Sans MS, Comic Sans, cursive",
            }}
          >
            Your Private Arabic Tutor
          </h2>
          <img
            src={sora}
            alt="Welcome Banner"
            className="img-fluid mt-3"
            style={{ maxWidth: "75%", height: "auto", borderRadius: "15px" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3
            className="text-center mb-4"
            style={{
              color: "#ff6f61",
              fontFamily: "Comic Sans MS, Comic Sans, cursive",
            }}
          >
            Alphabets & Numbers
          </h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {["One", "Two", "Three", "Four", "Five"].map((lesson, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100"
                  style={{ backgroundColor: "#ffebcd", borderRadius: "15px" }}
                >
                  <div className="card-body text-center">
                    <h5
                      className="card-title"
                      style={{
                        color: "#ff6f61",
                        fontFamily: "Comic Sans MS, Comic Sans, cursive",
                      }}
                    >
                      Lesson {lesson}
                    </h5>
                    <Link
                      to={`/lesson${lesson}`}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#ff6f61",
                        borderColor: "#ff6f61",
                        borderRadius: "15px",
                      }}
                    >
                      <i
                        className="bi bi-book"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Go to Lesson {lesson}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
