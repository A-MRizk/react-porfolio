import React, { useState, useEffect } from "react";
import Nav from "./Home/Nav";
import About from "./Home/About";
import Work from "./Home/Work";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";
import Main from "./Home/Main";

const Home = () => {
 const [isNavbarVisible, setIsNavbarVisible] = useState(true);

 useEffect(() => {
  const handleScroll = () => {
   const scrollY = window.scrollY;
   const isAtBottom = scrollY >= document.body.scrollHeight - window.innerHeight;
   const isSmallScreen = window.innerWidth <= 768;

   setIsNavbarVisible(!isAtBottom || !isSmallScreen);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
  <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
   <Main />
   <div className={`fade ${isNavbarVisible ? "fade-in" : "fade-out"}`}>
   <div className="flex justify-center">
      <Nav />
    </div>
   </div>
   <About />
   <Work />
   <Contact />
   <Footer />
  </div>
 );
};

export default Home;
