"use client";

import { Container, Spinner } from "@/components";
import { categoryOptions, projects as projectData } from "@/constants";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ProjectOptionsDropdown from "./ProjectOptionsDropdown";

const ProjectSection = () => {
  const [projects, setProjects] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProjects(projectData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProjectsHandler = async (category: string) => {
    setLoading(true);

    const filterProjects =
      category === "All"
        ? projectData
        : projectData.filter((p) => p.category === category);

    setProjects(filterProjects);

    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
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
        className={` flex-1 w-full h-full justify-center flex ${loading && "items-center"}`}
      >
        {loading ? <Spinner /> : <ProjectList projectList={projects} />}
      </div>
    </Container>
  );
};

export default ProjectSection;
