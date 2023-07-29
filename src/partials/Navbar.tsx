const Navbar = () => {
  const pages = [
    // {
    //   text: 'Blog',
    //   link: '/blog/',
    // },
    {
      text: 'Projects',
      link: '/projects/',
    },
    {
      text: 'About',
      link: '/about/',
    },
    {
      text: 'Contact Me',
      link: '/contact_me/',
    },
  ];

  return (
    <nav>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="z-20 flex items-center">
          <span className="self-center whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-semibold text-transparent">
            Brian's Portfolio
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg bg-slate-900 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:bg-slate-900 md:p-0">
            {pages.map((page) => {
              return (
                <li className="z-20" key={page.text}>
                  <a
                    href={page.link}
                    className="block rounded py-2 pl-3 pr-4 text-white  hover:text-cyan-400 md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    {page.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
