import NavBarStyle from "../styles/NavBarStyle.css";
import { NavLink } from "react-router-dom";
import "animate.css";

export const NavBar = () => {
  return (
    <nav
      className='d-flex justify-content-center sticky-top  justify-content-md-between bg-dark'
      style={{ width: "100%" }}
    >
      <a className='navbar-brand py-2 justify-self-start' href='#'>
        <img
          src={
            "https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png"
          }
          alt='Marvel Comics App Logo'
          className=' mx-4 my-auto animate__animated animate__fadeInLeft animate__delay-2 '
          width='90'
          height='60'
        />
      </a>
      <div className='navbar-nav ' id='nav-list'>
        <div className='navbar-collapse d-flex h2 '>
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
          {/* <NavLink
            to='/favorites'
            className={({ isActive }) =>
              `nav-item nav-link  ${
                isActive ? "text-danger" : "text-light"
              }`
            }
          >
            Favorites
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};
