import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-1/4 mx-auto rounded-md border-2 p-6 mt-12">
      <h3 className="text-2xl font-bold">Create an Account</h3>

      <form className="mt-5">
        <input
          className="border px-4 py-2 rounded w-full"
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          className="block mt-4 border px-4 py-2 rounded w-full"
          type="password"
          name="password"
          placeholder="password"
          required
        />

        <button type="submit" className="btn btn-warning  mt-6 w-full">
          create an account
        </button>
      </form>
      <p className="mt-3 text-center">
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
    </div>
  );
};

export default Register;
