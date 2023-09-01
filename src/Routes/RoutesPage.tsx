import { Routes, Route } from "react-router-dom";
import Home from "../Container/Home/Home";
import ExpensePage from "../Container/ExpensePage/ExpensePage";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expense" element={<ExpensePage />} />
    </Routes>
  );
};

export default RoutesPage;
