import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../../provider/AuthContext";

const Register = () => {
  const { signUp } = useContext(TravelContext);
  const [error, setError] = useState(null);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      console.log("password did not match");
      setError("password did not match");
      return;
    }
    console.log(email, password);

    signUp(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-1/4 mx-auto rounded-md border-2 p-6 mt-12">
      <h3 className="text-2xl font-bold">Create an Account</h3>

      <form onSubmit={handleRegister} className="mt-5">
        <input
          className="border px-4 py-2 rounded w-full"
          type="text"
          name="first"
          placeholder="First name"
          required
        />
        <input
          className="border mt-4 px-4 py-2 rounded w-full"
          type="text"
          name="last"
          placeholder="Last name"
          required
        />
        <input
          className="border mt-4 px-4 py-2 rounded w-full"
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
        <input
          className="block mt-4 border px-4 py-2 rounded w-full"
          type="password"
          name="confirm"
          placeholder="Confirm password"
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
      <p className="text-red-800 text-sm text-center mt-3">{error}</p>
    </div>
  );
};

export default Register;
