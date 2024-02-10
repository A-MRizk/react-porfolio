import React, { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { BsArrowLeft } from "react-icons/bs";

const Archive = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.fetch('*[_type == "project"]');
        setProjects(response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  const renderTableRows = () => {
    return projects.map((project, index) => {
      const { title, type, year, technologies, url } = project;
      return (
        <tr key={index}>
          <td>{year}</td>
          <td className="font-semibold">{title}</td>
          <td className="hidden md:table-cell">{type}</td>
          <td className="hidden md:table-cell">
            <ul className="flex flex-wrap font-tertiary">
              {technologies.map((tech, techIndex) => (
                <li key={techIndex} className="technology-bubble">
                  {tech}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <a href={url} className="text-gradient text-sm">
              Learn more
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <div className="mb-4">
            <a href="/" className="flex flex-row items-center max-w-[200px]">
              <div className="btn w-9 h-9 flex justify-center items-center">
                <BsArrowLeft />
              </div>
              <h1 className="text-gradient btn-link cursor-pointer max-w-[200px]">
                Anthony Rizk
              </h1>
            </a>
          </div>

          <h2 className="h2 leading-tight text-accent">All Projects</h2>

          <div className="overflow-x-auto">
            <table className="border-collapse w-full">
              <thead className="border-b border-[#FF56F6]/50">
                <tr>
                  <th className="text-left py-2">Year</th>
                  <th className="text-left py-2">Name</th>
                  <th className="hidden md:table-cell text-left py-2">Type</th>
                  <th className="hidden md:table-cell text-left py-2">
                    Technologies
                  </th>
                  <th className="text-left py-2">Link</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
