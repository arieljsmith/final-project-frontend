import HomeFriendRecommendation from '../components/HomeFriendRecommendation';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import NavBar from '../components/NavBar';
import AddRecModal from '../components/AddRecModal';
import AllRecommendations from '../components/AllRecommendations'
import { useState, useEffect } from 'react';

function Homepage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedRestaurants, setLoadedRestaurants] = useState([]);

    // Keeps this fetch request from looping infinitely
    useEffect(() => {
        fetch('https://undefined-rest-api.herokuapp.com/api/restaurants/?format=json'
        ).then(response => {
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedRestaurants(data);
        });
    }, []);

    
    // Displays a temporary loading screen while fetch request is running
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    // Main display of page
    return (
        <div className="bg-slate-100">

            <NavBar />

            <HomeHero />

            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black uppercase lg:text-3xl mt-20 mr-4 mb-8 ml-6 inline">Recommendations</h2>
                {/* <button className="inline w-auto px-3.5 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500">+</button> */}
            </div>

            <AllRecommendations restaurants={loadedRestaurants} />

            <Footer />

        </div>
    );
}

export default Homepage;