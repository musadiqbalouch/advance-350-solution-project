import { Route, Routes } from "react-router-dom";
// import Pages from "./Pages/Pages";
// import OurService from "./Components/HomePage/OurService/OurService";
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
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
