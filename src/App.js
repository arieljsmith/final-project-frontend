import { Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import SigninForm from "./pages/SigninForm";
import Homepage from "./pages/Homepage";
import LocationPage from "./pages/LocationPage";
import UserProfile from "./pages/UserProfile";
import Logout from "./pages/Logout";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/restaurant" element={<RestaurantDetail />} />
      {/* <Route path="/user" element={<UserProfile />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route 
        path="/user/:id"
        element={<UserProfile />}
      />
    </Routes>
  );
}

export default App;
