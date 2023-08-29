import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be 3 characters or more" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be 3 characters or more" }),
  age: z
    .number({ invalid_type_error: "Age must be Required." })
    .min(18, { message: "Age must be equal to 18 or more" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters or more" }),
});

type FormData = z.infer<typeof schema>;

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl px-8 p-12 mb-4 w-full max-w-xl"
      >
        <h2 className="text-center text-2xl text-neutral-500 mb-7 font-medium uppercase">
          Forms
        </h2>
        <div className="flex w-full justify-between mb-3">
          <div className="w-[48%]">
            <label
              htmlFor="fname"
              className="block text-gray-500 text-sm font-medium mb-2"
            >
              First Name
            </label>
            <input
              {...register("firstName")}
              id="fname"
              type="text"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.firstName && (
              <span className="text-red-800 text-xs">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-[48%]">
            <label
              htmlFor="lname"
              className="block text-gray-500 text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <input
              {...register("lastName")}
              id="lname"
              type="text"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.lastName && (
              <span className="text-red-800 text-xs">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="age"
            className="block text-gray-500 text-sm font-medium mb-2"
          >
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.age && (
            <span className="text-red-800 text-xs">{errors.age.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-gray-500 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.password && (
            <span className="text-red-800 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="bg-green-300 hover:bg-green-500 text-white font-normal py-2 px-4 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
