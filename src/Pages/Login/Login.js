import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Welcome!! Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));

    setError("");
  };

  //login with google
  const handleGoogleLogIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome!! Login Successfull.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    setError("");
  };

  //login with github
  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome!! Login Successfull.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    setError("");
  };

  return (
    <div>
      <div className="w-full  xl:px-8 xl:w-6/12 mx-auto mt-10 mb-10">
        <div className="bg-slate-200 rounded shadow-2xl p-7 sm:p-10">
          <h1 className="mb-4 text-2xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Please Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 text-lg">
                E-mail
              </label>
              <input
                placeholder="Enter Your Email"
                required
                type="email"
                className="flex-grow w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="password" className="inline-block mb-1 text-lg">
                Passowrd
              </label>
              <input
                placeholder="Enter Passowrd"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm"
                id="password"
                name="passoword"
              />
            </div>

            <p className="text-red-700">{error}</p>

            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide btn btn-info hover:btn-error"
              >
                Login Now
              </button>
            </div>
            <p className="lg:text-[15px] text-gray-600 sm:text-sm">
              Don't have an Accout?{" "}
              <Link to="/register" className="text-blue-700 text-center">
                {" "}
                Create Account
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>
          <div>
            <button
              onClick={handleGoogleLogIn}
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-5 font-medium tracking-wide btn btn-outline btn-primary hover:btn-primary"
            >
              <FaGoogle /> <span className="ml-3"> Login with Google</span>
            </button>
            <button
              onClick={handleGithubLogin}
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide btn btn-outline  hover:btn-active"
            >
              <FaGithub /> <span className="ml-3"> Login with Github </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
