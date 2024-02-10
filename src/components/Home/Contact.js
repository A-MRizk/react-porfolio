import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import { useForm } from "react-hook-form";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { client } from "./../../lib/client";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const personalInfoData = await client.fetch(
          `*[_type == "personalInfo"][0]{
            phoneNumber,
            email
          }`
        );
        setPersonalInfo(personalInfoData);
      } catch (error) {
        console.error("Error fetching personal info:", error);
      }
    };

    fetchPersonalInfo();
  }, []);

  const onSubmit = (formData) => {
    const emailSubject = formData.subject || "No Subject";
    const emailBody = `Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section id="contact" className="section py-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                <span className="underline decoration-accent/50">
                  Get in touch
                </span>
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
              <div className="hidden lg:flex flex-col items-center justify-center space-y-2">
                <div className="flex items-center space-x-5 justify-center">
                  <BsTelephoneFill className="text-accent h-7 w-7 animate-pulse" />
                  <p className="text-2xl">{personalInfo.phoneNumber}</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                  <HiMail className="text-accent h-7 w-7 animate-pulse" />
                  <p className="text-2xl">{personalInfo.email}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all contactinput"
              {...register("name")}
              placeholder="Name"
              type="text"
              autoComplete="name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all contactinput"
              {...register("email")}
              placeholder="Email"
              type="email"
              autoComplete="email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all contactinput"
              {...register("subject")}
              placeholder="Subject"
              type="text"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 contactinput"
              {...register("message")}
              placeholder="Message"></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
