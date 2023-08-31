import styles from "../../assets/Style/Style.module.css";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div className="w-full flex justify-center items-center">
      <table className="min-w-max w-[60%] table-auto text-left bg-white rounded-3xl shadow-lg">
        <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white ">
          <tr className="even:bg-gray-50/50 w-full h-16 border-gray-300 border-b py-8">
            <th className="pl-14 text-sm rounded-tl-3xl">Description</th>
            <th className="px-5 text-sm ">Amount</th>
            <th className="px-5 text-sm ">Category</th>
            <th className="px-5 text-sm rounded-tr-3xl"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={expense.id}
              className={`${
                index % 2 === 0
                  ? `${styles.rowEven} ${styles.rowEvenHover}`
                  : `${styles.rowOdd} ${styles.rowEvenHover}`
              }`}
            >
              <td className="pl-14">{expense.description}</td>
              <td className="px-5">{expense.amount}</td>
              <td className="px-5">{expense.category}</td>
              <td className="px-5">
                <button
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded-full"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="h-14 border-gray-300 ">
            <td className="pl-14 font-bold">Total</td>
            <td className="px- font-bold">
              ${" "}
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td className="px-5"></td>
            <td className="px-5"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
