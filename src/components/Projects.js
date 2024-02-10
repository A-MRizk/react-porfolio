import React from "react";
import Footer from "./Home/Footer";
import Archive from "./Projects/Archive";

const Projects = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden pt-8">
      <Archive />
      <Footer />
    </div>
  );
};

export default Projects;
