import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserRecommendations from "../components/UserRecommendations";
import AddRecModal from "../components/AddRecModal";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <div>
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
            className="object-cover h-48 m-2 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrF3t4HTqY8rjh54a9PrakBAZsJ5gPFv2CQ&usqp=CAU"
            alt="Avatar"
          />
          <div>
            <a className="mx-2 text-2xl font-semibold text-gray-700">
              Jone Doe
            </a>
          </div>
          <a>City, ST</a>
          <button className="text-white bg-gray-400 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            Follow
          </button>
        </div>
        <div className="">
          <a className="text-2xl p-1 ">Recs</a>
          <AddRecModal />
        </div>
        <div className="grid grid-cols-3">
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
