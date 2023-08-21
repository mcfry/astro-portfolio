import { Project } from '@/partials/Project';
import { Reveal } from '@/partials/Reveal';

const ProjectList = () => {
  const projects = [
    {
      name: 'Mock Draft Maker (Mdm)',
      techStack: [
        ['React', 'bg-cyan-500'],
        ['Zustand', 'bg-orange-800'],
        ['Ruby on Rails', 'bg-red-500'],
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
      imgSrc: '/assets/images/mdm_small.png',
      imgSrcMed: '/assets/images/mdm_med.png',
      imgSrcBig: '/assets/images/mdm_big.png',
      imgAlt: 'MDM image',
    },
    {
      name: 'Mog Up',
      techStack: [
        ['React', 'bg-cyan-500'],
        ['Node.js', 'bg-green-500'],
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
      imgSrc: '/assets/images/mogup_small.png',
      imgSrcMed: '/assets/images/mogup_med.png',
      imgSrcBig: '/assets/images/mogup_big.png',
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
      imgSrc: '/assets/images/port_small.png',
      imgSrcMed: '/assets/images/port_med.png',
      imgSrcBig: '/assets/images/port_big.png',
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
      imgSrc: '/assets/images/rsget_small.png',
      imgSrcMed: '/assets/images/rsget_med.png',
      imgSrcBig: '/assets/images/rsget_big.png',
      imgAlt: 'RsGet image',
    },
    {
      name: 'Card Memory',
      techStack: [
        ['Rails API', 'bg-red-500'],
        ['PostgreSQL', 'bg-blue-500'],
        ['Devise', 'bg-fuchsia-500'],
        ['React', 'bg-cyan-500'],
        ['MobX', 'bg-orange-500'],
        ['Three.js', 'bg-black'],
        ['Bootstrap', 'bg-purple-500'],
      ],
      description:
        'An application to guide and assist the task of memorizing a deck of cards using the PAO mnemonic system.',
      isNew: false,
      link: '/projects/card_memory/',
      imgSrc: '/assets/images/cardmem_small.png',
      imgSrcMed: '/assets/images/cardmem_med.png',
      imgSrcBig: '/assets/images/cardmem_big.png',
      imgAlt: 'Card Memory image',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center pb-40 pt-4">
      <span className="w-10/12 p-2 text-3xl font-bold md:w-9/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 5xl:w-6/12 10xl:w-4/12">
        <Reveal>
          <span>
            Recent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </span>
        </Reveal>
      </span>
      <div className="z-10 flex w-10/12 flex-col gap-6 md:w-9/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 5xl:w-6/12 10xl:w-4/12">
        {projects.map((project) => {
          return <Project key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
};

export { ProjectList };
