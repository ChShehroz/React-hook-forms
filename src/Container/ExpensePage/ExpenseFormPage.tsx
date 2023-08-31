import { useState } from "react";
import ExpenseForm from "../../Expense-tracker/Component/ExpenseForm";

const ExpenseFormPage = () => {
  const [expense, setExpense] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Groceries" },
    { id: 2, description: "bbb", amount: 100, category: "Utilities" },
    { id: 3, description: "ccc", amount: 100, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 100, category: "Utilities" },
  ]);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f8f9fa]">
      <ExpenseForm
        onSubmit={(formData) =>
          setExpense([...expense, { ...formData, id: expense.length + 1 }])
        }
      />
    </div>
  );
};

export default ExpenseFormPage;
