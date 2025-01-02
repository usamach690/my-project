import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SignIn from "./SignIn";
import Login from "./Login";

const LoginPopup = ({ loginPopup, toggleLoginPopup }) => {
  const [showSignIn, setShowSighnIn] = React.useState(false);
  const loginPopupRef = useRef();

  const handleSignIn = () => {
    setShowSighnIn(!showSignIn);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginPopupRef.current && e.target === loginPopupRef.current) {
        toggleLoginPopup();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleLoginPopup]);

  return (
    <>
      {loginPopup && (
        <div
          ref={loginPopupRef}
          className="fixed top-0 left-0 w-full h-full 
            z-50 overflow-y-auto"
        >
          <div
            className="absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2
            w-[90%] sm:w-auto "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-white/10
              backdrop-blur-md sm:w-[600px] md:w-[380px]
              shadow-custom-inset"
            >
              {showSignIn ? (
                <SignIn handleSignIn={handleSignIn} />
              ) : (
                <Login handleSignIn={handleSignIn} />
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;