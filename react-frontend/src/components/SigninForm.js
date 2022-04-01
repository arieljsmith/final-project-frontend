import React, { useState } from "react";

function SigninForm() {
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
    setSubmitted(true);
  };

  return (
    <div>
      <div className="grid place-items-center  p-8  h-screen form-container">
        <div className="grid place-items-center">
          <h1 className="text-4xl">Sign In</h1>
          <a href="/sign-up">-Sign Up-</a>
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
    </div>
  );
}

export default SigninForm;
