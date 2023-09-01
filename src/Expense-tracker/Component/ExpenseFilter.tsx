import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import categories from "../Category";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onSelectCategory: (category: string) => void;
  onAddRecord: () => void;
}

const ExpenseFilter = ({ onSelectCategory, onAddRecord }: Props) => {
  return (
    <div className="min-w-max max-w-2xl w-full flex gap-3 justify-center items-center m-auto">
      <select
        className="w-[90%] p-3 mb-5 rounded-3xl outline-none transition duration-150 ease-in-out bg-white shadow-lg text-sm "
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option>All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="group relative w-[10%] flex justify-center items-center mb-5">
        <button
          onClick={onAddRecord}
          className="border border-none hover:border-red-500 text-[#9a9a9a] hover:bg-slate-500 hover:text-white px-3 py-1.5 rounded-md"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span className="absolute -top-8 -right-16 transition-all scale-0 rounded-lg bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          Add Record
        </span>
      </div>
    </div>
  );
};

export default ExpenseFilter;
