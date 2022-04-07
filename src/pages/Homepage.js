import HomeFriendRecommendation from '../components/HomeFriendRecommendation';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import NavBar from '../components/NavBar';
import AddRecModal from '../components/AddRecModal';
import AllRecommendations from '../components/AllRecommendations'
import { useState } from 'react';

function Homepage() {
    const DUMMY_DATA = [
        {
            id: '1',
            name: 'Alley 26',
            city: 'Durham',
        },
        {
            id: '2',
            name: 'Dashi',
            city: 'Durham',
        },
        {
            id: '3',
            name: 'M Sushi',
            city: 'Durham',
        },
        {
            id: '4',
            name: 'Kochi',
            city: 'New York City',
        },
        {
            id: '5',
            name: 'Crown Shy',
            city: 'New York City',
        },
        {
            id: '6',
            name: 'Dhamaka',
            city: 'New York City',
        },
        {
            id: '7',
            name: 'Atoboy',
            city: 'New York City',
        }
    ];
    
    // const [isLoading, setIsLoading] = useState(true);
    // const [loadedRestaurants, setLoadedRestaurants] = useState([]);

    // fetch('https://undefined-rest-api.herokuapp.com/api/restaurants/?format=json'
    // ).then(response => {
    //     return response.json();
    // }).then(data => {
    //     setIsLoading(false);
    //     setLoadedRestaurants(data);
    // });

    // if (isLoading) {
    //     return (
    //         <section>
    //             <p>Loading...</p>
    //         </section>
    //     );
    // }

    return (
        <div className="bg-slate-100">
            <NavBar />
            <HomeHero />
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black uppercase lg:text-3xl mt-20 mr-4 mb-8 ml-6 inline">Recommendations</h2>
                <button className="inline w-auto px-3.5 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500">+</button>
            </div>

            {/* Testing */}
            {/* <div>
                <ul>
                    {DUMMY_DATA.map((restaurant) => {
                        return <li key={restaurant.id}>{restaurant.name}</li>;
                    })}
                </ul>
            </div> */}

            <AllRecommendations restaurants={DUMMY_DATA} />

            {/* <div className="grid grid-cols-2 md:grid-cols-4 mt-4 mr-4 ml-4 mb-14">
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
            </div> */}
            <Footer />
        </div>
    );
}

export default Homepage;