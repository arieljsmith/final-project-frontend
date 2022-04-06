import NavBar from '../components/NavBar';
import LocationHero from '../components/LocationHero';
import LocationRecommendations from '../components/LocationRecommendations';
import Footer from '../components/Footer';
import AddRecModal from '../components/AddRecModal';

function LocationPage() {
    return (
        <div className="bg-slate-100">
            <NavBar />
            <LocationHero />

            {/* <div className="mb-4 pb-4">
                <div className="mr-6 ml-10 inline-block">
                    <h3 className="text-2xl font-semibold text-black uppercase lg:text-2xl">Recommendations for</h3>
                    <h2 className="text-3xl font-semibold text-black uppercase lg:text-3xl">Location Name</h2>
                </div>
                <div className="inline-block">
                    <button className="w-auto px-3.5 py-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500">+</button>
                </div>
            </div> */}

            <div className="flex items-center">
                <div className="mr-10 ml-6 mb-6">
                    <h3 className="text-2xl font-semibold text-black uppercase lg:text-2xl">Recommendations for</h3>
                    <h2 className="text-3xl font-semibold text-black uppercase lg:text-3xl">Location Name</h2>
                </div>
                <AddRecModal />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-4 mr-4 ml-4 mb-14">
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
                <LocationRecommendations />
            </div>

            <Footer />
        </div>
    );
}

export default LocationPage;