import { Route, Routes } from "react-router-dom";
import Pages from "./Pages/Pages";
// import OurService from "./Components/HomePage/OurService/OurService";
// import ContactUs from "./Components/HomePage/ContactUs/ContactUs";
// import Navbar from "./Components/HomePage/Navbar/Navbar";
// import Footer from "./Components/HomePage/Footer/Footer";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/*" element={<Pages />} />
      </Routes>
    </div>
  );
};

export default App;
