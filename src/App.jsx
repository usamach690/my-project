import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainImg from "./assets/sunrise.jpg";
import LoginPopup from "./components/LoginPopoup/LoginPopup";
const bgImage = {
  backgroundImage: `url(${MainImg})`,
  height: "100vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const App = () => {
  const [loginPopup, setLoginPopup] = React.useState(false);

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };
  return (
    <>
      <main style={bgImage}>
        <Navbar toggleLoginPopup={toggleLoginPopup} />
        <Hero />
      </main>

      {/* LoginPopup */}
      <LoginPopup loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
    </>
  );
};

export default App;
