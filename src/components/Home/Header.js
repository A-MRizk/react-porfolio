import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { client } from "./../../lib/client";

const Header = () => {
  const [socials, setSocials] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const socialData = await client.fetch(
          `*[_type == "socialMedia"]{
            _id,
            url
          }`
        );
        setSocials(socialData);

        const personalData = await client.fetch(
          `*[_type == "personalInfo"]{
            name,
            familyName
          }`
        );
        setPersonalInfo(personalData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 370);
    };

    window.addEventListener("resize", handleResize);
    setIsSmallScreen(window.innerWidth < 370);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <a href="/">
              <p className="text-3xl font-bold font-primary uppercase">
                {personalInfo.name}
              </p>
              <p className="text-3xl text-gradient uppercase">
                {personalInfo.familyName}
              </p>
            </a>
          </div>

          <div className="flex gap-x-4 justify-between items-center">
            {!isSmallScreen && (
              <div className="flex text-[20px] gap-x-4 max-w-max mx-auto lg:mx-0">
                {socials.map((social) => (
                  <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="#FF56F6"
                    bgColor="transparent"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
