import { Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/sign-in" element={<SigninForm />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}

export default App;

