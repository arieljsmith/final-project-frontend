import HomeFriendRecommendation from '../components/HomeFriendRecommendation';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import NavBar from '../components/NavBar';

function Homepage() {
    return (
        <div className="bg-slate-100">
            <NavBar />
            <HomeHero />
            <h2 className="text-2xl font-semibold text-black uppercase lg:text-3xl mt-20 mr-4 mb-8 ml-6">Friend Recommendations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 m-4">
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
                <HomeFriendRecommendation />
            </div>
            <Footer />
        </div>

    );
}

export default Homepage;