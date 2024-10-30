import React from "react";
import { MdSavedSearch } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { PiSignInFill } from "react-icons/pi";
import { RiExpandRightLine } from "react-icons/ri";
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";
import { Link, useLocation, useParams } from "react-router-dom";

const BottomNavBar = () => {
  const { pathname } = useLocation();
  const navItem = [
    {
      name: "Home",
      Link: "#",
      icon: (
        <MdSavedSearch
          size={28}
          className={pathname === "/home" && `text-theme-dark`}
        />
      ),
    },
    {
      name: "Discovery",
      Link: "/",

      icon: (
        <IoEarth size={28} className={pathname === "/" && `text-theme-dark`} />
      ),
    },
    {
      name: "Library",
      Link: "#",

      icon: (
        <IoLibraryOutline
          size={28}
          className={pathname === "/library" && `text-theme-dark`}
        />
      ),
    },
    {
      name: "Sign In",
      Link: "#",

      icon: (
        <PiSignInFill
          size={28}
          className={pathname === "/signIn" && `text-theme-dark`}
        />
      ),
    },
  ];
  return (
    <div className="w-full bg-primary-color fixed bottom-0 block md:hidden">
      <ul className="flex justify-around">
        {navItem.map((ele) => (
        <a href={ele.Link}>
          <li
            className={`${
              pathname === ele.Link ? `border-t-4 border-theme-dark` : ``
            } py-4 px-2 `}
          >
            {ele.icon}
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavBar;
