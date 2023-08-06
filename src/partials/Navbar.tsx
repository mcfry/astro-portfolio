const Navbar = () => {
  const pages = [
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
        <div className="dropdown-end dropdown z-30 md:hidden">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-30 -mt-4 w-52 rounded-t-none bg-gradient-to-t from-cyan-950 to-slate-950 p-2 shadow"
          >
            {pages.map((page) => {
              return (
                <li className="z-20" key={page.text}>
                  <a
                    href={page.link}
                    className="block rounded py-2 pl-3 pr-4 font-semibold text-white hover:text-cyan-400 md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    {page.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg bg-slate-900 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:bg-slate-900 md:p-0">
            {pages.map((page) => {
              return (
                <li className="z-30" key={page.text}>
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
