import { Result } from "postcss";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import PreviousMap from "postcss/lib/previous-map";




function SignupForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    // lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  function handleSubmit(event) {
    event.preventDefault();
      fetch('https://undefined-rest-api.herokuapp.com/api/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then((Response) => {
          // Response.json());
          navigate('/signin');
          console.log(values);
          setSubmitted(true);
        });

  };


  
  return (
    <div>
      <NavBar />
      <div className="grid place-items-center p-8 h-screen form-container">
        <div className="grid space-y-4 place-items-center">
          <h1 className="text-4xl text-center">Sign Up</h1>
          <a className="w-full text-center" href="/signin">
            -Sign In-
          </a>
          <form
            className="grid grid-cols-2 grid-rows-4 place-items-center gap-x-2 gap-y-4 register-form"
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="col-span-2">
              <p>Name</p>
              <input
                onChange={handleFirstNameInputChange}
                values={values.name}
                className="w-96 shadow apperance-none border rounded  py-2 px-3 text-gray-700 w leading-tight focus:outline-none focus:shadow-outline form-field"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="col-span-2">
              <p>Email</p>
              <input
                onChange={handleEmailInputChange}
                values={values.email}
                className="w-96 shadow apperance-none border rounded  py-2 px-3 text-gray-700 w leading-tight focus:outline-none focus:shadow-outline form-field"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="col-span-2">
              <p>Password</p>
              <input
                onChange={handlePasswordInputChange}
                values={values.password}
                className="w-96 shadow apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-field"
                placeholder="Password"
                name="password"
                type='password'
                required
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold col-span-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline form-field"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {submitted ? (
        <div className="success-message">
          Success! I currently do nothing at the moment
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default SignupForm;
