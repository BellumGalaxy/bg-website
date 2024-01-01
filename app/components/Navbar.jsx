import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar absolute py-4 px-5 md:px-20 w-full">
      <Link href="/">
        <img
          src="./logo/logo.svg"
          alt="bg-logo"
          className="top-4 absolute w-20 h-20"
        />
      </Link>
      <div className="dropdown absolute right-5 md:right-28 mt-10">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-colorLogo"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-colorLogo rounded-box w-fit bg-bgvertical bg-opacity-50"
        >
          {/* <li>
            <Link href="/atividades">Atividades</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li> */}
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-center hidden lg:flex justify-center w-full">
        <ul className="menu menu-horizontal px-1 text-2xl text-colorLogo">
          <li>
            <Link href="/atividades">Atividades</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>
      </div> */}
      
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};
export default Navbar;
