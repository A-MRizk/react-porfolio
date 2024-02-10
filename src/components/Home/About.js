import React, { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { client } from "./../../lib/client";
import { fadeIn } from "./../../variants";

const About = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personalData = await client.fetch(
          `*[_type == "personalInfo"]{
            coverImage{
              asset ->{
                _id,
                url
              },
              alt,
            },
            aboutTitle,
            about
          }`
        );
        setPersonalInfo(personalData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });
  return (
    <section id="about" className="section">
      {/* ref={ref} */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
            {personalInfo.coverImage && (
              <img
                src={personalInfo.coverImage.asset.url}
                alt={personalInfo.coverImage.alt}
              />
            )}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1">
            <h2 className="h2 text-accent">About</h2>
            <h3 className="h3 mb-4">{personalInfo.aboutTitle}</h3>
            <p className="mb-6">{personalInfo.about}</p>
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  satisfied <br />
                  Clients
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
