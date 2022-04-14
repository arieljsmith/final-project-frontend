import { Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import SigninForm from "./pages/SigninForm";
import Homepage from "./pages/Homepage";
import LocationPage from "./pages/LocationPage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/sign-in" element={<SigninForm />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/user" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
