import HomeFriendRecommendation from '../components/HomeFriendRecommendation';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import AddFriendModal from '../components/AddFriendModal';
import NavBar from '../components/NavBar';

function Homepage() {
    return (
        <div className="bg-slate-100">
            <NavBar />
            <HomeHero />
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black uppercase lg:text-3xl mt-20 mr-4 mb-8 ml-6 inline">Recommendations</h2>
                <button className="inline w-auto px-3.5 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500">+</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-4 mr-4 ml-4 mb-14">
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

                <AddFriendModal />
            </div>
            <Footer />
        </div>

    );
}

export default Homepage;