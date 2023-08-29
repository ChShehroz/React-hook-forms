import { useState } from "react";
import ExpenseList from "../../Expense-tracker/Component/ExpenseList";

const ExpensePage = () => {
  const [expense, setExpense] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Groceries" },
    { id: 2, description: "bbb", amount: 100, category: "Utilities" },
    { id: 3, description: "ccc", amount: 100, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 100, category: "Utilities" },
  ]);
  return (
    <div>
      <ExpenseList
        expenses={expense}
        onDelete={(id) => setExpense(expense.filter((e) => e.id != id))}
      />
    </div>
  );
};

export default ExpensePage;
