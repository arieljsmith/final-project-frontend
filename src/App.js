import { Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import SigninForm from "./pages/SigninForm";
import Homepage from './pages/Homepage';
import LocationPage from './pages/LocationPage';

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/sign-in" element={<SigninForm />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/locationskelly" element={<LocationPage />} />
    </Routes>
  );
}

export default App;

