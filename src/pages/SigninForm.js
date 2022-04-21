import React, { useState } from "react";
import axiosInstance, { AxiosInstance } from "../axios";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function SigninForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
    
    axiosInstance
      .post('token/', {
        email: values.email,
        password: values.password,
      })
      .then(res => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorizaton'] = 
                'JWT ' + localStorage.getItem('access_token');
          navigate('/');
          console.log(res); 
      });
    setSubmitted(true);
  };

  return (
    <div>
      <NavBar />
      <div className="grid place-items-center  p-8  h-screen form-container">
        <div className="grid place-items-center">
          <h1 className="text-4xl">Log In</h1>
          {/* <a href="/signup">-Sign Up-</a> */}
        </div>
        <form
          className="grid grid-cols-1 grid-rows-6  place-items-center gap-2 register-form"
          onSubmit={handleSubmit}
        >
          <div>
            <p>Email</p>
            <input
              onChange={handleEmailInputChange}
              values={values.email}
              className="shadow apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-field"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div>
            <p>Password</p>
            <input
              onChange={handlePasswordInputChange}
              values={values.password}
              className="shadow apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-field"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline form-field"
            type="submit"
          >
            Sign In
          </button>
          {submitted ? (
            <div className="success-message">
              Success! I currently do nothing at the moment.
            </div>
          ) : null}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SigninForm;
