import styles from "../../assets/Style/Style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex justify-center items-center">
      <table className="min-w-max max-w-2xl w-full table-auto text-left bg-white rounded-3xl shadow-lg">
        <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white ">
          <tr className="even:bg-gray-50/50 w-full h-16 border-gray-300 border-b py-8">
            <th className="pl-14 text-sm rounded-tl-3xl">Description</th>
            <th className="px-5 text-sm ">Amount</th>
            <th className="px-5 text-sm ">Category</th>
            <th className="px-1 text-sm "></th>
            <th className="px-1 text-sm rounded-tr-3xl"></th>
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
              <td className="px-1">
                <div className="group relative">
                  <button className="border border-none hover:border-red-500 text-stone-700 hover:bg-neutral-900 hover:text-white px-3 py-1.5 rounded-md">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>

                  <span className="absolute -top-7 -left-10 transition-all scale-0 rounded-lg bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                    Edit
                  </span>
                </div>
              </td>
              <td className="px-1">
                <div className="group relative">
                  <button
                    className="border border-none hover:border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-md"
                    onClick={() => onDelete(expense.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>

                  <span className="absolute -top-7 -left-12 transition-all scale-0 rounded-lg bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                    Delete
                  </span>
                </div>
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
            <td className="px-1"></td>
            <td className="px-1"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
