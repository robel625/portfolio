import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   setShowMenu(false);
  // }, [pathname]);

  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Skills",
      link: "skills",
    },
    {
      title: "Portfolio",
      link: "portfolio",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  return (
    <>
      <nav className="bgCustomGradient customShadow sticky top-0 z-[1030] bg-primary shadow-md py-5 text-white font-jakartaSans">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link className="uppercase font-bold text-3xl" to={`/`}>
                MMK
              </Link>
            </div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="hover:opacity-60 duration-100 lg:hidden"
            >
              <HiOutlineBars3BottomRight size={32} />
            </button>
            <div
              className={`nav-items fixed top-0 duration-200 ${
                showMenu ? "left-0" : "-left-full"
              } w-full h-full bg-primaryDark lg:bg-transparent flex justify-center lg:justify-end items-center lg:static`}
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="hover:opacity-60 duration-100 absolute top-0 right-0 mt-3 mr-3 lg:hidden"
              >
                <HiOutlineXMark size={32} />
              </button>
              <ul className="flex flex-col lg:flex-row flex-wrap gap-x-9 gap-y-1 text-xl font-semibold">
                {menu.map((menuItem, index) => (
                  <li className="text-center" key={index}>
                    <ScrollLink
                      to={menuItem?.link}
                      className="hover:text-primaryLight2 hover:transition-colors cursor-pointer"
                      activeClass="text-primaryLight2"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {menuItem?.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
