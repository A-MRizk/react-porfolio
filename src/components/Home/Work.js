import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import { client } from "./../../lib/client";
import { Link } from "react-router-dom";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await client.fetch(
          `*[_type == "project"] | order(_createdAt desc){
            image{
              asset ->{
                _id,
                url
              },
              alt,
            },
            title,
            type,
            url,
            _id
          }[0...3]`
        );
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-col gap-y-2 mb-8 lg:mb-0">
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-lg">
              I'm a full stack developer, proficient in both frontend and
              backend technologies. I create dynamic web applications that
              deliver seamless user experiences and robust functionality. Let's
              build something amazing together.
            </p>
            <Link to="/projects" className="btn btn-sm lg:w-[50%] btn-centered">
              View All Projects
            </Link>
          </motion.div>
          {projects.map((project) => (
            <motion.div
              key={project._id}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-col gap-y-12 mb-10 lg:mb-0">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300 cursor-pointer"></div>
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={project.image.asset.url}
                    alt={project.image.alt}
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                    <span className="text-gradient">{project.type}</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                    <span className="text-3xl text-white">{project.title}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
