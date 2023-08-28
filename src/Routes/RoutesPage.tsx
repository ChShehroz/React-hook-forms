import { Routes, Route } from "react-router-dom";
import Home from "../Container/Home/Home";
const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/SignIn" element={} /> */}
    </Routes>
  );
};

export default RoutesPage;
