import React, { useEffect, useState } from "react";
import ProjectsDetails from "./ProjectsDetails";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <section className="pb-14 text-white mt-16 w-11/12 mx-auto lg:w-4/5">
        <h1 className="text-2xl font-bold text-center mb-4">Projects</h1>
        <div className="mt-10 flex lg:flex-row flex-col items-center gap-2 justify-evenly">
          {allData?.map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
        </div>
      </section>
    </>
  );
}
