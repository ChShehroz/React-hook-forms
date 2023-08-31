import { Routes, Route } from "react-router-dom";
import Home from "../Container/Home/Home";
import ExpensePage from "../Container/ExpensePage/ExpensePage";
import ExpenseFormPage from "../Container/ExpensePage/ExpenseFormPage";
const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/expenseForm" element={<ExpenseFormPage />} />
    </Routes>
  );
};

export default RoutesPage;
