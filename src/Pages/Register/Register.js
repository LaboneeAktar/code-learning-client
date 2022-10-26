import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, providerLogin } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // console.log(name, photoURL, email, password, confirm);

    //Password Validation for uppercase
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Passowrd should be at least one uppercase letter.");
      return;
    }

    //Password Validation for special character
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Passowrd should have one special character.");
      return;
    }

    //Password Validation for length
    if (password < 6) {
      setError("Passowrd must be 6 character or more.");
      return;
    }

    //check confirm password
    if (password !== confirm) {
      setError("Don't matched your passoword. Please try again.");
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(name, photoURL)
          .then(() => {})
          .catch((error) => console.error(error));
        form.reset();
        toast.success("Successfully Created Account");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  //login with google
  const handleGoogleLogIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome!! Login Successfull.");
      })
      .catch((error) => console.error(error));
  };

  //login with github
  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome!! Login Successfull.");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="w-full xl:px-8 xl:w-6/12 mx-auto mt-10 mb-10">
        <div className="bg-slate-200 rounded shadow-2xl p-7 sm:p-10">
          <h1 className="mb-4 text-2xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="name" className="inline-block mb-1 text-lg">
                Name
              </label>
              <input
                placeholder="Enter Your Name"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm"
                id="firstName"
                name="name"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="photo" className="inline-block mb-1 text-lg">
                Photo URL
              </label>
              <input
                placeholder="Enter Photo URL"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm"
                id="photo"
                name="photoURL"
              />
            </div>

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
            <div className="mb-1 sm:mb-2">
              <label htmlFor="password" className="inline-block mb-1 text-lg">
                Confirm Passowrd
              </label>
              <input
                placeholder="Confirm Passowrd"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm"
                id="confirm"
                name="confirm"
              />
            </div>
            <p className="text-red-700">{error}</p>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide btn btn-info hover:btn-error"
              >
                Register
              </button>
            </div>
            <p className="lg:text-[15px] text-gray-600 sm:text-sm">
              Alreay have an Accout?{" "}
              <Link to="/login" className="text-blue-700 text-center">
                {" "}
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>
          <div>
            <button
              onClick={handleGoogleLogIn}
              type="submit"
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

export default Register;
