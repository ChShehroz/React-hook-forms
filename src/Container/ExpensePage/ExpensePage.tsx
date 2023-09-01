import { useState } from "react";
import ExpenseList from "../../Expense-tracker/Component/ExpenseList";
import ExpenseFilter from "../../Expense-tracker/Component/ExpenseFilter";
import ExpenseForm from "../../Expense-tracker/Component/ExpenseForm"; // Assuming you have an ExpenseForm component

const ExpensePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [expense, setExpense] = useState([
    { id: 1, description: "Lux Soap", amount: 100, category: "Groceries" },
    { id: 2, description: "Electricity", amount: 80, category: "Utilities" },
    { id: 3, description: "GTA 5", amount: 56, category: "Entertainment" },
    { id: 4, description: "Meat", amount: 100, category: "Groceries" },
  ]);

  const visibleExpense =
    selectedCategory === "All categories"
      ? expense
      : expense.filter((e) => e.category === selectedCategory);

  return (
    <div className="my-12 flex">
      {/* Sidebar for the form */}
      <div className="w-1/4 p-4  bg-transparent">
        <ExpenseForm
          onSubmit={(formData) =>
            setExpense([...expense, { ...formData, id: expense.length + 1 }])
          }
        />
      </div>

      {/* Main content */}
      <div className="w-3/4 p-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseList
          expenses={visibleExpense}
          onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
};

export default ExpensePage;
