import { Reveal } from '@/partials/Reveal';

type ProjectProps = {
  project: {
    name: string;
    techStack: string[][];
    description: string;
    isNew: boolean;
    link: string;
    imgSrc: string;
    imgAlt: string;
  };
};

const Project = ({ project }: ProjectProps) => {
  return (
    <a href={project.link}>
      <div className="indicator w-full">
        {project.isNew && (
          <span className="badge indicator-item badge-primary z-30 rounded-none">
            new
          </span>
        )}
        <Reveal>
          <div className="card glass card-side h-fit w-full flex-col rounded-md shadow-xl lg:h-48 lg:flex-row">
            <figure className="lg:w-[20%]">
              <img
                className="object-scale-down px-4 pt-4 lg:p-4"
                src={project.imgSrc}
                alt={project.imgAlt}
              />
            </figure>
            <div className="card-body p-4 lg:w-[80%]">
              <span>
                <h2 className="card-title mb-1 hover:text-cyan-400">
                  {project.name}
                </h2>
                {project.techStack.map((tech) => (
                  <span
                    key={tech[0]}
                    className={`badge mr-2 border-none p-2 font-semibold text-white ${tech[1]}`}
                  >
                    {tech[0]}
                  </span>
                ))}
              </span>
              <p className="w-fit pt-2 text-gray-200">{project.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </a>
  );
};

export { Project };
