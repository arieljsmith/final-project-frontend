import axios from "axios";
import React, { useState, useEffect, } from "react";
import axiosInstance from "../axios";
import jwt_decode from "jwt-decode";



const AddRecModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [values, setValues] = useState({
    name: "",
    city: '',
  });



  const [loadedCities, setLoadedCities] = useState([]);
  useEffect(() => {
    axios.get('https://undefined-rest-api.herokuapp.com/api/cities/')
      .then(res => {
        setLoadedCities(res.data);
        console.log(loadedCities)
      });
  }, [])


  var token = localStorage.getItem('access_token');
  if (token !== null) {
    var user = jwt_decode(token);
  }
  else { var user = { user_id: '0' } }
  let logged_in = user.user_id
  console.log(logged)

  const writeCities = loadedCities.filter(city => city.creator_id === logged_in);
  writeCities.sort((a,b) => a.name.localeCompare(b.name))


  console.log(writeCities)

  const [submitted, setSubmitted] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleCityInputChange = (event) => {
    setValues({ ...values, city: event.target.value });
  };


  function handleSubmit(event) {
    event.preventDefault();
    axiosInstance
      .post('restaurants/', {
        name: values.name,
        city: values.city,
      })
    console.log(values);
    setShowModal(false);
  };



  return (
    <>
      {/* <button
        className="w-auto px-3.5 py-2 mb-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Recommendation
      </button> */}
      <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setShowModal(true)}>Add Recommendation</a>
      {showModal ? (
        <>
          <div className="flex justify-center backdrop-blur items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-left flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add Recommendation</h3>
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
                      <p>Restaurant Name</p>
                      <input
                        onChange={handleNameInputChange}
                        values={values.name}
                        className="shadow apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-field"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </div>
                    <div>
                      <p>City</p>
                      <select
                        onChange={handleCityInputChange}
                        values={values.city}
                        className="shadow apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-field"
                        placeholder="Name"
                        name="name"
                        required
                      >
                        {writeCities.map(city => (
                          <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                      </select>

                    </div>
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline form-field"
                        type="submit"
                      // onClick={() => setShowModal(false)}
                      >
                        Add
                      </button>
                    </div>
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

export default AddRecModal;

