import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import { Link } from "react-scroll";
import { client } from "./../../lib/client";

const Banner = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personalData = await client.fetch(
          `*[_type == "personalInfo"]{
            profileImage{
              asset ->{
                _id,
                url
              },
              alt,
            },
            name,
            familyName,
            banner
          }`
        );
        setPersonalInfo(personalData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-[85hv] lg:min-h-[78hv] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              {personalInfo.name} <span>{personalInfo.familyName}</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Creator",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              {personalInfo.banner}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gradient btn-link cursor-pointer">
                About me
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            {personalInfo.profileImage && (
              <img
                src={personalInfo.profileImage.asset.url}
                alt={personalInfo.profileImage.alt}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
