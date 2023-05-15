import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../../provider/AuthContext";

const Login = () => {
  const { signIn } = useContext(TravelContext);
  const [agreed, setAgreed] = useState(true);

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-1/4 mx-auto rounded-md border-2 p-6 mt-12">
      <h3 className="text-2xl font-bold">Login</h3>

      <form onSubmit={handleLogIn} className="mt-5">
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
        <div className="flex items-center mt-3">
          <input
            onClick={() => setAgreed(!agreed)}
            type="checkbox"
            className="checkbox mr-2"
          />
          <small>Remember me</small>
        </div>
        <button
          type="submit"
          disabled={agreed}
          className="btn btn-warning  mt-6 w-full">
          Login
        </button>
      </form>
      <p className="mt-3 text-center">
        <small>
          Don't have an account? <Link to="/register">Create an Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
