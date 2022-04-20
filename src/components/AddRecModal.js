import React, { useState, useEffect } from "react";



const AddRecModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [values, setValues] = useState({
    name: "",
    city: '',
  });


  const [loadedCities, setLoadedCities] = useState([]);
  console.log(loadedCities)
  // console.log(props.loadedCities.name)
  useEffect(() => {
    fetch('https://undefined-rest-api.herokuapp.com/api/cities/?format=json'
    ).then(response => {
      return response.json();
    }).then(data => {
      setLoadedCities(data);
      console.log(data);
    });
  }, []);


  const [submitted, setSubmitted] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleCityInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  // function cityMap(props) {
  //   return (
  //   props.restaurants.map((city) => (
  //       key={restaurant.id}
  //       id={restaurant.id}
  //       name={city.name}
  //       city={restaurant.city}
  //       creator={restaurant.creator}
  //       creator_id={restaurant.creator_id}))}


  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://undefined-rest-api.herokuapp.com/api/restaurants/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'accessToken',
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.text())
      .then((data) => console.log(data));
    console.log(values)
    setShowModal(false)
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
      <a href="#" className="block mx-4 mt-2 text-sm text-white capitalize lg:mt-0 hover:text-gray-200" onClick={() => setShowModal(true)}>Add Recommendation</a>
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
                        <option></option>)
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
