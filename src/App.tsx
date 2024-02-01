import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import SendEmail from "./pages/SendEmail/SendEmail";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Error404 from "./pages/404/Error404";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { useAppSelector } from "./app/hooks";

function App() {
  // const {token} = useAppSelector(state => state.auth)
  const token=localStorage.getItem('token'); 
  return (
    <BrowserRouter>
      <Routes>
        {token && <Route path="/" element={<Home />} />}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/send-verify-email" element={<SendEmail />} />
        <Route path="/email-verify/:token" element={<EmailVerify />} /> 
        <Route
          path="/forgot-password-verify/:token"
          element={<ChangePassword />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="*" element={<Error404 />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
