const ProjectList = () => {
  const projects = [
    {
      name: 'Mock Draft Maker (Mdm)',
      techStack: [
        ['React', 'bg-cyan-500'],
        ['Zustand', 'bg-orange-800'],
        ['Ruby on Rails 7', 'bg-red-500'],
        ['PostgreSQL', 'bg-blue-500'],
        ['Tailwind + DaisyUI', 'bg-purple-500'],
        ['ESBuild', 'bg-yellow-500'],
        ['Render', 'bg-emerald-500'],
      ],
      description:
        "Stylish mocker for the NFL Draft. Designed as a free alternative to PFF's 'Mock Draft Simulator'.",
      isNew: true,
      link: '/projects/mdm-maker/',
      imgSrc: '/assets/images/default-project.png',
      imgAlt: 'MDM image',
    },
    {
      name: 'Mog Up',
      techStack: [
        ['React (CRA)', 'bg-cyan-500'],
        ['GraphQL', 'bg-pink-500'],
        ['Tailwind + DaisyUI', 'bg-purple-500'],
        ['Apollo', 'bg-fuchsia-500'],
        ['Render', 'bg-rose-500'],
        ['Amazon S3', 'bg-rose-500'],
        ['Render', 'bg-emerald-500'],
      ],
      description:
        'A transmog management and sharing app that features a live 3D model viewer. Supports selecting items manually or using a BetterTransmog output string.',
      isNew: true,
      link: '/projects/mog-up/',
      imgSrc: '/assets/images/default-project.png',
      imgAlt: 'Mog Up image',
    },
    {
      name: 'Astrofolio',
      techStack: [
        ['Astro.js', 'bg-violet-500'],
        ['React (CRA)', 'bg-cyan-500'],
        ['Typescript', 'bg-blue-500'],
        ['Tailwind', 'bg-purple-500'],
        ['Husky', 'bg-orange-800'],
        ['Netlify', 'bg-emerald-500'],
      ],
      description: 'This portfolio, which is built with Astro (and more)!',
      isNew: true,
      link: '/projects/astrofolio/',
      imgSrc: '/assets/images/astrofolio_screen1.png',
      imgAlt: 'Astro image',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <span className="w-6/12 p-2 text-3xl font-bold">
        Recent{' '}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </span>
      </span>
      <div className="z-10 flex w-6/12 flex-col gap-6">
        {projects.map((project) => {
          return (
            <div key={project.name} className="block">
              <a href={project.link}>
                <div className="indicator w-full">
                  <span className="badge indicator-item badge-primary rounded-none">
                    new
                  </span>
                  <div className="card glass card-side h-48 w-full shadow-xl">
                    <figure>
                      <img
                        className="h-40 w-40 object-scale-down p-4"
                        src={project.imgSrc}
                        alt={project.imgAlt}
                      />
                    </figure>
                    <div className="card-body">
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
                      <p className="w-[40rem] pt-2 text-gray-200">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ProjectList };
