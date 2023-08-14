import { Reveal } from './Reveal';
import TechStack from './TechStack';

const Hero = () => (
  <section className="flex w-full flex-col items-center justify-center">
    <div className="hero-content w-full flex-col lg:flex-row-reverse lg:justify-around">
      <Reveal>
        <img
          className="h-[24rem] w-[24rem]"
          src="/assets/images/p2.png"
          alt="Avatar image"
          loading="lazy"
        />
      </Reveal>
      <div className="flex w-full flex-col items-center md:w-fit md:pl-8 lg:block">
        <Reveal>
          <h1 className="text-center text-5xl font-bold">
            Hi there, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Brian 👋
            </span>{' '}
          </h1>
        </Reveal>
        <div className="py-3 leading-snug">
          <Reveal>
            <p className="text-center font-semibold lg:text-left">
              I'm a Full-stack Web Developer with experience in:
            </p>
          </Reveal>
          <Reveal>
            <TechStack
              techStack={[
                'React',
                'Ruby on Rails',
                'Python',
                'GraphQL',
                'Express',
                'MySQL',
                'PostgreSQL',
                'NoSQL',
                'Typescript',
                'MobX',
                'Redux',
                'Zustand',
                'CSS/SCSS',
                'HTML',
              ]}
              size={5}
              breakpoint="lg"
            />
          </Reveal>
        </div>
        <div className="py-3">
          <Reveal>
            <p className="text-center font-semibold lg:text-left">
              I've also worked with:
            </p>
          </Reveal>
          <Reveal>
            <TechStack
              techStack={[
                'Django',
                'Flask',
                'jQuery',
                'Firebase',
                'AWS',
                'Electron',
                'D3.js',
                'Flow.js',
                'AngularJS',
                'C/C++',
                'Java',
                'And more!',
              ]}
              size={5}
              breakpoint="lg"
            />
          </Reveal>
        </div>
        <Reveal>
          <div className="z-20 mt-4 flex items-center">
            <img
              className="h-10 w-10"
              src="/assets/images/icons8-github-512.png"
            />
            <div className="pl-1 font-semibold hover:text-fuchsia-500">
              <a href="https://github.com/mcfry">Mcfry</a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export { Hero };
