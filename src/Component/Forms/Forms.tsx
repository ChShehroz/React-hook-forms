import { FormEvent, useState } from "react";

const Forms = () => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    age: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(signUp);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-300">
      <form
        onSubmit={handleSubmit}
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
              onChange={(event) =>
                setSignUp({ ...signUp, firstName: event.target.value })
              }
              value={signUp.firstName}
              id="fname"
              type="text"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-[48%]">
            <label
              htmlFor="lname"
              className="block text-gray-500 text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <input
              onChange={(event) =>
                setSignUp({ ...signUp, lastName: event.target.value })
              }
              value={signUp.lastName}
              id="lname"
              type="text"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
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
            onChange={(event) =>
              setSignUp({ ...signUp, age: event.target.value })
            }
            value={signUp.age}
            id="age"
            type="number"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-gray-500 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            onChange={(event) =>
              setSignUp({ ...signUp, password: event.target.value })
            }
            value={signUp.password}
            id="password"
            type="password"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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
