import categories from "../Category";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="w-[50%] p-3 mb-5 rounded-2xl outline-none transition duration-150 ease-in-out bg-white shadow-lg text-sm focus:ring-2 focus:ring-blue-300"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option>All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
