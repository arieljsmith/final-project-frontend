import React, { useState } from "react";
import axiosInstance from "../axios";



function AddCityModal() {
  const [showModal, setShowModal] = useState(false);


  const [values, setValues] = useState({
    name: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };


  function handleSubmit() {
    // event.preventDefault();
    axiosInstance
    .post('cities/',{
      name: values.name,
    })
    console.log(values);
    setShowModal(false);
    window.location.reload()
    }; 


  return (
    <>
      {/* <button
        className="w-auto px-3.5 py-2 mb-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button> */}
      <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setShowModal(true)}>Add City</a>

      {showModal ? (
        <>
          <div className="flex justify-center backdrop-blur items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-left flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add City</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="w-auto px-3.5 py-2 mb-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500">
                      x
                    </span>
                  </button>
                </div>
                <div className="text-left relative p-6 flex-auto">
                  <form
                    className="grid grid-cols-1 grid-rows-2  place-items-center gap-2 register-form"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <p>Name</p>
                      <input
                        onChange={handleNameInputChange}
                        values={values.name}
                        className="shadow apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-field"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline form-field"
                      type="submit"
                      // onClick={() => setShowModal(false)}
                    >
                      Add
                    </button>
                    {submitted ? (
                      <div className="success-message">
                        Success! I currently do nothing at the moment.
                      </div>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddCityModal;