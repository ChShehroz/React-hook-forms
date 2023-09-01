import { useState } from "react";
import ExpenseList from "../../Expense-tracker/Component/ExpenseList";
import ExpenseFilter from "../../Expense-tracker/Component/ExpenseFilter";
import ExpenseForm from "../../Expense-tracker/Component/ExpenseForm"; // Assuming you have an ExpenseForm component

const ExpensePage = () => {
  const [isFormVisible, setFormVisible] = useState(false);

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
      {isFormVisible && (
        <div
          className="w-1/4 p-4 bg-transparent transition-transform duration-300 ease-in-out fixed left-0 top-0 bottom-0 overflow-y-auto"
          style={{
            width: "25%",
            transform: isFormVisible ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <ExpenseForm
            onSubmit={(formData) =>
              setExpense([...expense, { ...formData, id: expense.length + 1 }])
            }
          />
        </div>
      )}

      {/* Main content */}
      <div
        className={`transition-all duration-300 ease-in-out p-4 ${
          isFormVisible ? "ml-[25%]" : "ml-0"
        }`}
        style={{
          width: isFormVisible ? "75%" : "100%",
        }}
      >
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
          onAddRecord={() => setFormVisible(!isFormVisible)}
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
