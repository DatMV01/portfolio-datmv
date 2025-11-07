import Project from "./Project";
 
interface ProjectItem {
  id: string | number;
  image: string;
  title: string;
  desc: string;
  demoLink: string;
  githubLink: string;
  category: string;
}

interface ProjectListProps {
  projectList: ProjectItem[];
}

const ProjectList = ({ projectList }: ProjectListProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectList?.length ? (
        projectList.map(
          ({ id, image, title, desc, demoLink, githubLink }, i) => (
            <Project
              key={id}
              image={image}
              title={title}
              desc={desc}
              demoLink={demoLink}
              githubLink={githubLink}
            />
          )
        )
      ) : (
        <p className="text-muted-foreground col-span-full text-center">
          No projects found.
        </p>
      )}
    </div>
  );
};

export default ProjectList