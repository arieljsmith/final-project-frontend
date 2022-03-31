import { Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/sign-in" element={<SigninForm />} />
    </Routes>
  );
}

export default App;
