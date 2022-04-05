import NavBar from '../components/NavBar';
import LocationHero from '../components/LocationHero';
import Footer from '../components/Footer';

function LocationPage() {
    return (
        <div className="bg-slate-100">
            <NavBar />
            <LocationHero />
            <p>Stuff. And things.</p>
            <Footer />
        </div>
    );
}

export default LocationPage;