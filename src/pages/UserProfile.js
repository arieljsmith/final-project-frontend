import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserRecommendations from "../components/UserRecommendations";
import AddRecModal from "../components/AddRecModal";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import SpecificUserRecs from "../components/SpecificUserRecs";

function UserProfile() {
  const [isUsersLoading, setIsUsersLoading] = useState(true);
  const [isRestaurantsLoading, setIsRestaurantsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [loadedRestaurants, setLoadedRestaurants] = useState([]);
  const location = useLocation()

  // Keeps this fetch request from looping infinitely
  useEffect(() => {
      fetch('https://undefined-rest-api.herokuapp.com/api/users/?format=json'
      ).then(response => {
          return response.json();
      }).then(data => {
          setIsUsersLoading(false);
          setLoadedUsers(data);
      });
  }, []);

  // Keeps this fetch request from looping infinitely
  useEffect(() => {
      fetch('https://undefined-rest-api.herokuapp.com/api/restaurants/?format=json'
      ).then(response => {
          return response.json();
      }).then(data => {
          setIsRestaurantsLoading(false);
          setLoadedRestaurants(data);
          // console.log(loadedRestaurants)
      });
  }, []);

  // Displays a temporary loading screen while fetch request is running
  if (isUsersLoading || isRestaurantsLoading) {
      return (
          <section>
              <p>Loading...</p>
          </section>
      );
  }

  let creator_id = location.pathname.substr(6)

  function GetSpecificUser(userList) {
    for (var user of userList) {
        if (user.id == creator_id) {
            return user
        }
    }
  } 

  let creator = GetSpecificUser(loadedUsers)

  return (
    <div>
      <NavBar />
      <div className="recco-roboto-text">
      <button
            className="absolute left-0 w-auto px-4 py-2 mt-4 ml-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-white text-slate-400 rounded-full lg:w-auto hover:bg-slate-200 hover:text-slate-700 focus:outline-none focus:bg-slate-200 focus:text-slate-700"
            onClick={() => {
              window.history.back();
            }}
          >
            &lt;
          </button>
        <div className="grid place-items-center flex items-center">
          
          <img
            className="object-cover h-48 mt-10 mb-4 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrF3t4HTqY8rjh54a9PrakBAZsJ5gPFv2CQ&usqp=CAU"
            alt="Avatar"
          />
          <div className="mb-2">
            <a className="text-2xl font-semibold text-gray-700">
              {creator.name}
            </a>
          </div>
          <a>{creator.location}</a>
          <button className="text-white bg-gray-400 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            Follow
          </button>
        </div>
        <div className="">
          <a className="text-2xl font-semibold text-black uppercase lg:text-3xl mt-20 mr-4 mb-8 ml-6 inline lg:ml-24 recco-roboto-text">Recs</a>
          {/* <AddRecModal /> */}
        </div>
        <SpecificUserRecs restaurants={loadedRestaurants} user={creator}/>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
