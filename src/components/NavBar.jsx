import NavBarStyle from "../styles/NavBarStyle.css";
import { NavLink } from "react-router-dom";
import "animate.css";

export const NavBar = () => {
  return (
    <nav className='d-flex w-100 sticky-top  justify-content-md-between bg-dark'>
      <a className='navbar-brand py-3 justify-self-start' href='#'>
        <img
          src={"../../public/img/marvel-icon.png"}
          alt='Marvel Comics App Logo'
          className=' mx-4 my-auto animate__animated animate__fadeInLeft animate__delay-2 '
          width='130'
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
                isActive
                  ? "background: linear-gradient(220.55deg, #FFC328 0%, #E20000 100%)"
                  : "text-light"
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
