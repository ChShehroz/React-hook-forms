import categories from "../Category";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="min-w-max max-w-2xl w-full p-4 mb-5 rounded-3xl outline-none transition duration-150 ease-in-out bg-white shadow-lg text-sm focus:ring-2 focus:ring-blue-300"
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
