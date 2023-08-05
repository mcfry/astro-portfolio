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
        ['Jest', 'bg-rose-800'],
        ['ESBuild', 'bg-yellow-500'],
        ['Render', 'bg-emerald-500'],
      ],
      description:
        "Stylish mocker for the NFL Draft. Designed as a free alternative to PFF's 'Mock Draft Simulator'.",
      isNew: true,
      link: '/projects/mdm-maker/',
      imgSrc: '/assets/images/mdm_screen1.png',
      imgAlt: 'MDM image',
    },
    {
      name: 'Mog Up',
      techStack: [
        ['React (CRA)', 'bg-cyan-500'],
        ['GraphQL', 'bg-pink-500'],
        ['Apollo', 'bg-fuchsia-500'],
        ['Tailwind + DaisyUI', 'bg-purple-500'],
        ['Firebase', 'bg-rose-500'],
        ['S3', 'bg-rose-500'],
        ['Sequelize ORM', 'bg-blue-500'],
        ['PostgreSQL', 'bg-blue-500'],
        ['Render', 'bg-emerald-500'],
      ],
      description:
        'A transmog management and sharing app that features a live 3D model viewer. Supports selecting items manually or using a BetterTransmog output string.',
      isNew: true,
      link: '/projects/mog-up/',
      imgSrc: 'https://i.imgur.com/lu4LXfw.png',
      imgAlt: 'Mog Up image',
    },
    {
      name: 'Astrofolio',
      techStack: [
        ['Astro.js', 'bg-violet-500'],
        ['React', 'bg-cyan-500'],
        ['Typescript', 'bg-blue-500'],
        ['Tailwind', 'bg-purple-500'],
        ['Husky', 'bg-orange-800'],
        ['Netlify', 'bg-emerald-500'],
      ],
      description: 'This portfolio, which is built with Astro!',
      isNew: true,
      link: '/projects/astrofolio/',
      imgSrc: '/assets/images/astrofolio_screen1.png',
      imgAlt: 'Astro image',
    },
    {
      name: 'RsGet',
      techStack: [
        ['Electron', 'bg-cyan-500'],
        ['React', 'bg-cyan-500'],
        ['Redux', 'bg-purple-500'],
        ['Flow', 'bg-orange-500'],
        ['MaterialUI', 'bg-blue-500'],
        ['Webpack', 'bg-cyan-500'],
      ],
      description:
        'An application for viewing, filtering, and analyzing live information from the RS economy.',
      isNew: false,
      link: '/projects/rsget/',
      imgSrc: 'https://i.imgur.com/G3w6ayc.png',
      imgAlt: 'RsGet image',
    },
    {
      name: 'Card Memory',
      techStack: [
        ['Rails (api)', 'bg-red-500'],
        ['PostgreSQL', 'bg-blue-500'],
        ['Devise (users)', 'bg-fuchsia-500'],
        ['React', 'bg-cyan-500'],
        ['MobX', 'bg-orange-500'],
        ['Three.js (panorama)', 'bg-black'],
        ['Bootstrap', 'bg-purple-500'],
      ],
      description:
        'An application to guide and assist the task of memorizing a deck of cards using the PAO mnemonic system.',
      isNew: false,
      link: '/projects/card_memory/',
      imgSrc: 'https://i.imgur.com/U6Yzbub.gif',
      imgAlt: 'Card Memory image',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center pb-20">
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
                  {project.isNew && (
                    <span className="badge indicator-item badge-primary rounded-none">
                      new
                    </span>
                  )}
                  <div className="card glass card-side h-48 w-full rounded-md shadow-xl">
                    <figure>
                      <img
                        className="h-40 w-40 object-scale-down p-4"
                        src={project.imgSrc}
                        alt={project.imgAlt}
                      />
                    </figure>
                    <div className="card-body">
                      <span className="w-[40rem]">
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
    </section>
  );
};

export { ProjectList };
