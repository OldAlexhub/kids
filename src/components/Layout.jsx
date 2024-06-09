import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logout from "./Logout"; // Ensure the correct path to the Logout component

const Layout = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `${process.env.REACT_APP_SCORE}/${userId}`
        );

        if (response.status === 200) {
          const data = response.data.show;
          // Ensure the data is an array and has valid objects
          const validData = Array.isArray(data) ? data : [data];
          setScores(
            validData.filter((score) => score && score.score !== undefined)
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Arabic Lessons
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/media">
                  Media
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {scores.length > 0 ? (
                scores.map((score, index) => (
                  <li key={index} className="nav-item">
                    <span className="nav-link score">Score: {score.score}</span>
                  </li>
                ))
              ) : (
                <li className="nav-item">
                  <span className="nav-link score">Score: 0</span>
                </li>
              )}
              <li className="nav-item">
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
      <style jsx>{`
        .score {
          color: #fff;
          background-color: #ff6f61;
          border-radius: 5px;
          padding: 5px 10px;
          font-weight: bold;
          font-size: 1.2em;
          display: inline-block;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default Layout;
