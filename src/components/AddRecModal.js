import React, { useState, useEffect } from "react";

const AddRecModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [cityNames, setCityNames] = useState([]);

  const [values, setValues] = useState({
    name: "",
    city: '',
  });


  const [loadedCities, setLoadedCities] = useState([]);
  useEffect(() => {
    fetch("https://undefined-rest-api.herokuapp.com/api/cities/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCityNames(
          data.map((value) => {
            return value.name;
          })
        );
      });
    }, [])


  var token = localStorage.getItem('access_token');
  var user = jwt_decode(token)
  console.log(user.user_id)

  const writeCities = loadedCities.filter(city => city.creator_id === user.user_id);
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
    .post('restaurants/',{
      name: values.name,
      city: values.city,
    })
    console.log(values);
    setShowModal(false);
    }; 



  return (
    <>
      <button
        className="w-auto px-3.5 py-2 mb-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center backdrop-blur items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-left flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    Recommend A <br />
                    Restaurant
                  </h3>
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
                  <form className="  rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <select
                      name="city"
                      id="city"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    >
                      {cityNames.map((name) => (
                        <option value={name}>{name}</option>
                      ))}
                    </select>
                    <label className="block text-black text-sm font-bold mb-1">
                      Image
                    </label>
                    <input
                      type="file"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  <button
                    className=" place-items-center text-white bg-gray-400 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
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
