import { useState } from "react";
import ExpenseList from "../../Expense-tracker/Component/ExpenseList";
import ExpenseFilter from "../../Expense-tracker/Component/ExpenseFilter";

const ExpensePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expense, setExpense] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Groceries" },
    { id: 2, description: "bbb", amount: 100, category: "Utilities" },
    { id: 3, description: "ccc", amount: 100, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 100, category: "Utilities" },
  ]);
  const visibleExpense = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f8f9fa]">
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) => setExpense(expense.filter((e) => e.id != id))}
      />
    </div>
  );
};

export default ExpensePage;
