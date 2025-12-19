import { Navigate, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/HomePage/ContactUs/ContactUs";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import Footer from "./Components/HomePage/Footer/Footer";
import HomPage from "./Components/HomePage/HomePage";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomPage />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
