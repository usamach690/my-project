import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";

const SignIn = ({handleSignIn}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <div className="p-6">
        <h1
          className="text-3xl text-white font-bold
            text-center mb-4 text-shadow"
        >
          Create Your Account
        </h1>
        <form className="flex flex-col gap-3">
          <div>
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input type="text" id="username" className="input" />
          </div>

          <div>
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input type="email" id="email" className="input" />
          </div>

          <div>
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="input"
              />

              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white absolute top-1/2
                      right-3 -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white absolute top-1/2
                        right-3 -translate-y-1/2 cursor-pointer"
                />
              )}
            </div>
          </div>
        </form>
        <button className="primary-btn">Create Account</button>
        <p className="text-center text-white text-sm my-3">Or Login with</p>
        <div className="flex justify-center gap-6">
          <div
            className="bg-white w-9 h-9 rounded-full flex 
            items-center justify-center shadow-custom-inset
            hover:scale-110 transition-all duration-300"
          >
            <FcGoogle className="text-3xl" />
          </div>

          <div
            className="bg-blue-600 w-9 h-9 rounded-full flex 
            items-center justify-center shadow-custom-inset
            hover:scale-110 transition-all duration-300"
          >
            <FaLinkedinIn className="text-2xl text-white" />
          </div>
        </div>
        <p
          className="text-center text-white text-sm my-3
        hover:text-lime-200 cursor-pointer text-shadow"
        >
          <button onClick={handleSignIn}>
            {" "}
            Already Have an Account? Login
          </button>
        </p>
      </div>
    </>
  );
};

export default SignIn;
