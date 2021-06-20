import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Toggle } from './toggle';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="bg-secondary">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-orange-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              to="/"
              exact
              activeClassName="text-primary"
              className="text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-secondary hover:text-primary"
            >
              home
            </NavLink>
            <button
              className="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="h-full flex items-center leading-snug rounded text-secondary hover:text-primary"
                  activeClassName="text-primary bg-primary"
                >
                  get to know me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/believe"
                  className="h-full flex items-center leading-snug rounded text-secondary hover:text-primary"
                  activeClassName="text-primary bg-primary"
                >
                  what i believe
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/resume"
                  className="h-full flex items-center leading-snug rounded text-secondary hover:text-primary"
                  activeClassName="text-primary bg-primary"
                >
                  {/* TODO: change this to a dropdown with education skills, and experience */}
                  resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/photography"
                  className="h-full flex items-center leading-snug rounded text-secondary hover:text-primary"
                  activeClassName="text-primary bg-primary"
                >
                  photography
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="h-full flex items-center leading-snug rounded text-secondary hover:text-primary"
                  activeClassName="text-primary bg-primary"
                >
                  get in touch
                </NavLink>
              </li>
              <li className={'nav-item' + (navbarOpen ? '' : ' pl-4')}>
                <div className="inline-flex">
                  <SocialIcon
                    url="https://www.linkedin.com/in/sophie-jacobsen/"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                  />
                  <SocialIcon
                    // TODO: Update this to be correct IG
                    url="https://instagram.com/_sophiaclarise_"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                  />
                </div>
              </li>
              <li className="nav-item">
                <Toggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
