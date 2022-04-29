import NavBar from "../components/NavBar";
import LocationHero from "../components/LocationHero";
import LocationRecommendations from "../components/LocationRecommendations";
import Footer from "../components/Footer";
import AddRecModal from "../components/AddRecModal";
import { useState, useEffect } from "react";
import AllRecommendations from "../components/AllRecommendations";

function LocationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRestaurants, setLoadedRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://undefined-rest-api.herokuapp.com/api/restaurants/?format=json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const params = new URLSearchParams(window.location.search);
        const city = params.get("city");
        setIsLoading(false);
        setLoadedRestaurants(
          data.filter((value) => {
            return value.city.toLowerCase().includes(city.toLowerCase());
          })
        );
      });
  }, []);

  let outsideParams = new URLSearchParams(window.location.search);
  let cityName = outsideParams.get("city");

  return (
    <div className="bg-slate-100">
      <NavBar />
      <LocationHero />
      <div className="flex items-center recco-roboto-text">
        <div className="mr-10 ml-6 mb-6">
          <h3 className="text-2xl font-semibold text-black uppercase lg:text-2xl">
            Recommendations for
          </h3>
          <h2 className="text-5xl font-semibold text-black uppercase lg:text-5xl">
            {cityName}
          </h2>
        </div>
        <AddRecModal />
      </div>

      <AllRecommendations restaurants={loadedRestaurants} />

      <Footer />
    </div>
  );
}

export default LocationPage;
