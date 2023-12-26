import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar absolute py-4 pr-20 w-full">
      <Link href="/">
        <img
          src="./logo/logo.svg"
          alt="bg-logo"
          className="top-5 left-20 absolute w-20 h-20"
        />
      </Link>
      <div className="dropdown absolute right-28">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-colorLogo rounded-box w-24"
        >
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
      </div>
      <div className="navbar-center hidden lg:flex justify-center w-full">
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
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};
export default Navbar;
