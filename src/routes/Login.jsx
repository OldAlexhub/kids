import React, { useState } from "react";
import Image from "../images/banner.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN, formData);

      if (response.status === 200) {
        const { name, img, userId } = response.data;
        localStorage.setItem("name", name);
        localStorage.setItem("image", img);
        localStorage.setItem("userId", userId);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2
                className="mb-4"
                style={{
                  color: "#ff6f61",
                  fontFamily: "Comic Sans MS, Comic Sans, cursive",
                }}
              >
                Welcome to Your Arabic Learning Hub
              </h2>
              <img
                src={Image}
                alt="Banner"
                className="img-fluid mb-4"
                style={{ borderRadius: "15px" }}
              />
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="Enter User Name"
                    required
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
