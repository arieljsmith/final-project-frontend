import React, { useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PreviousMap from "postcss/lib/previous-map";


export default function SignunForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleNameInputChange = (event) => {
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
    
    <>
    <NavBar />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for a New Account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or if you already have an account,{' '}
              <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign In
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#"  onSubmit={handleSubmit} method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <p className="mt-2 text-base text-gray-600">Name</p>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  onChange={handleNameInputChange}
                  values={values.name}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <p className="mt-2 text-base text-gray-600">Email</p>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleEmailInputChange}
                  values={values.email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <p className="mt-2 text-base text-gray-600">Password</p>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={handlePasswordInputChange}
                  values={values.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>



            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

