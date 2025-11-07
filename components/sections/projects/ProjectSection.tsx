"use client";

import { Container, Spinner } from "@/components";
import { categoryOptions, projects as projectData } from "@/constants";
import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectOptionsDropdown from "./ProjectOptionsDropdown";
import { fail } from "node:assert";

const ProjectSection = () => {
  const [projects, setProjects] = useState(projectData);
  const [loading, setLoading] = useState(true);

  const filterProjectsHandler = (category: string) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);

    if (category === "All") {
      setProjects(projectData);
      return;
    }

    const filterProjects = projectData.filter(
      (project) => project.category === category
    );

    setProjects(filterProjects);
  };

  return (
    <Container
      as="section"
      className="min-h-screen mt-8 flex flex-col gap-4 items-center  "
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl">My latest project</h2>

      <p className="px-4 text-center leading-6 md:px-50">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in web development.
      </p>

      <ProjectOptionsDropdown
        categoryOptions={categoryOptions}
        onCategorySelected={filterProjectsHandler}
      />

      <div
        className={` flex-1 w-full h-full justify-center ${loading && "items-center"}`}
      >
        {loading ? <Spinner /> : <ProjectList projectList={projects} />}
      </div>
    </Container>
  );
};

export default ProjectSection;
