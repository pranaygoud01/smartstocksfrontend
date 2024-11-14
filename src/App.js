import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Stocks from "./pages/Stocks";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Predict from "./pages/Predict";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="overflow-x-hidden ">
      <NavBar />
      <Routes>
        {user && <Route path="/predict" element={<Predict />} />}
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/news" element={<News />} />
        <Route path="/registersucessful" element={<Success />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
