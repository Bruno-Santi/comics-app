import NavBarStyle from "../styles/NavBarStyle.css";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className='d-flex w-100  justify-content-md-between bg-dark'>
      <a className='navbar-brand pl-1 justify-self-start ' href='#'>
        <img
          src={"../../public/img/marvel-icon.png"}
          alt='Marvel Comics App Logo'
          className='mx-4 mt-4 align-middle py-1'
          width='fit'
          height='100'
        />
      </a>
      <div className='navbar-nav ' id='nav-list'>
        <div className='navbar-collapse d-flex mx-5 h4 '>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `nav-item nav-link mx-5  ${
                isActive ? "text-danger" : "text-light"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/favorites'
            className={({ isActive }) =>
              `nav-item nav-link  ${
                isActive ? "text-danger" : "text-light"
              }`
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
