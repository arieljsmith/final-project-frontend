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
      {/* BEGIN HERO SECTION */}
      <header>
        <nav className="bg-white shadow dark:bg-gray-800">
          <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-700">
                  <a
                    className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Restaurant Recommendations
                  </a>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path
                        fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile Menu open: "block", Menu closed: "hidden" */}
              <div className="hidden -mx-4 lg:flex lg:items-center">
                <a
                  href="/sign-in"
                  className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Sign In
                </a>
                <a
                  href="/sign-up"
                  className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* END HERO SECTION */}
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
