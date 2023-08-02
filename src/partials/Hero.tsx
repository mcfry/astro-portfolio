const Hero = () => (
  <div className="flex w-full flex-col items-center justify-center">
    <div className="hero-content w-full flex-col lg:flex-row-reverse lg:justify-around">
      <img
        className="h-[24rem] w-[24rem]"
        src="/assets/images/p2.png"
        alt="Avatar image"
        loading="lazy"
      />
      <div className="pl-8">
        <h1 className="text-5xl font-bold">
          Hi there, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Brian 👋
          </span>{' '}
        </h1>{' '}
        <p className="w-[28rem] py-3 leading-snug">
          <p className="font-semibold">
            I'm a Full-stack Web Developer with experience in:
          </p>
          <ul className="ml-4 inline-flex list-disc space-x-6 marker:text-white">
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>GraphQL</li>
            <li>Express</li>
          </ul>
          <br />
          <ul className="ml-4 inline-flex list-disc space-x-6 marker:text-white">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>NoSQL (MongoDB)</li>
            <li>Typescript</li>
            <li>MobX</li>
          </ul>
          <br />
          <ul className="ml-4 inline-flex list-disc space-x-6 marker:text-white">
            <li>Redux</li>
            <li>Zustand</li>
            <li>CSS/SCSS</li>
            <li>HTML</li>
          </ul>
        </p>
        <p className="py-3">
          <p className="font-semibold">I've also worked with:</p>
          <ul className="ml-4 inline-flex list-disc space-x-6 marker:text-white">
            <li>Django</li>
            <li>Flask</li>
            <li>jQuery</li>
            <li>Firebase</li>
            <li>AWS</li>
            <li>Electron</li>
          </ul>
          <br />
          <ul className="ml-4 inline-flex list-disc space-x-6 marker:text-white">
            <li>D3.js</li>
            <li>Flow.js</li>
            <li>AngularJS 1.0</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>And more!</li>
          </ul>
        </p>
        <div className="z-20 mt-4 flex items-center">
          <img
            className="h-10 w-10"
            src="/assets/images/icons8-github-512.png"
          />
          <div className="pl-1 font-semibold hover:text-fuchsia-500">
            <a href="https://github.com/mcfry">Mcfry</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
