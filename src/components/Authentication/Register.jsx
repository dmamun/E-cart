import React from "react";

const Register = () => {
  return (
    <div>
      <form action="#" method="post">
        <div className="mb-4">
          <input
            type="email"
            placeholder="enter email here"
            id="email"
            name="email"
            className="mt-1 p-2 w-1/2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="enter password here"
            id="password"
            name="password"
            className="mt-1 p-2 w-1/2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-32 text-white p-2 rounded-md hover:bg-blue-600"
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
