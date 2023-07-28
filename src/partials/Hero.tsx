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
        <p className="w-[20rem] py-6">Some words about me</p>
        <div>some linkies</div>
      </div>
    </div>
  </div>
);

export { Hero };
