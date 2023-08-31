import categories from "../Category";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z
    .string()
    .min(3, "Description should be at least 3 characters."),
  amount: z
    .number({ invalid_type_error: " Amount is Required." })
    .refine((val) => val !== 0),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is Required." }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="w-full max-w-2xl">
      <form
        onSubmit={handleSubmit(submitData)}
        className="bg-white shadow-md rounded-xl px-8 p-12 mb-4 "
      >
        <div className="mb-3">
          <label
            htmlFor="description"
            className="block text-gray-500 text-sm font-medium mb-2"
          >
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline"
          />
          {errors.description && (
            <span className="text-red-800 text-xs">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="amount"
            className="block text-gray-500 text-sm font-medium mb-2"
          >
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline"
          />
          {errors.amount && (
            <span className="text-red-800 text-xs">
              {errors.amount.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-gray-500 text-sm font-medium mb-2"
          >
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-red-800 text-xs">
              {errors.category.message}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            className={`bg-green-500 hover:bg-green-300 cursor-pointer text-white font-normal py-2 px-4 rounded-full`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
