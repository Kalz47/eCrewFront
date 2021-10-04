import React from "react";
import { useState } from "react";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import Footer from "./HomePage/Footer";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(login(value));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center blur-lg">
      <div className="md:px-40 sm:px-20 px-10 py-44">
        <div className="shadow-lg sm:flex">
          <div
            className="sm:w-2/5 w-full bg-sitetheme-blue bg-cover bg-center text-white"
            // style="background-image: url('')"
          >
            <div className="p-8">
              <h1>
                SIGN<span className="text-white">UP</span>
              </h1>
              <p className="leading-tight mt-2 text-sm text-white">
                Create an account to join our awesome community
              </p>
            </div>
          </div>
          <div className="sm:w-3/5 w-full bg-white">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <label for="username" className="text-xs text-gray-500">
                  Username
                </label>
                <input
                  className="w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <label id="passowrd" className="text-xs text-gray-500">
                  Password
                </label>
                <input
                  className=" mb-6 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />

                <button
                  // type="submit"
                  // onClick={handleSubmit}
                  className="shadow-lg pt-3 pb-3 w-full text-white bg-sitetheme-blue hover:bg-white hover-text-sitetheme-blue rounded-full cursor-pointer border hover-border-sitetheme-blue"
                >
                  Login
                </button>
              </form>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="no-underline text-sitetheme-blue font-bold hover:text-blue-900"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
