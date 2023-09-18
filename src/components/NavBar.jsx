import NavBarStyle from "../styles/NavBarStyle.css";
import { NavLink } from "react-router-dom";
import "animate.css";

export const NavBar = () => {
  return (
    <nav
      className='d-flex sticky-top  justify-content-md-between bg-dark'
      style={{ width: "100%" }}
    >
      <a className='navbar-brand py-2 justify-self-start' href='#'>
        <img
          src={
            "https://assets.stickpng.com/images/61054e8cc32c810004977250.png"
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
