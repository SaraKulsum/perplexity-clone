import { useMemo, useState } from "react";
import { MdSavedSearch } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { PiSignInFill } from "react-icons/pi";
import { RiExpandRightLine } from "react-icons/ri";
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";
import "./SideBar.css";
import FullLogo from "../SVG/FullLogo";
import Logo from "../SVG/Logo";
import { Link, useLocation, useParams } from "react-router-dom";
import { TfiArrowTopRight } from "react-icons/tfi";
import { CiMobile4 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  const { pathname } = useLocation();

  const sideBarItem = [
    {
      name: "Home",
      Link: "#",
      icon: (
        <MdSavedSearch
          size={collapsed ? 28 : 20}
          className={pathname === "#" && `text-theme-dark`}
        />
      ),
    },
    {
      name: "Discovery",
      Link: "/",
      icon: (
        <IoEarth
          size={collapsed ? 28 : 20}
          className={pathname === "/" && `text-theme-dark`}
        />
      ),
    },
    {
      name: "Library",
      Link: "#",
      icon: (
        <IoLibraryOutline
          size={collapsed ? 28 : 20}
          className={pathname === "#" && `text-theme-dark`}
        />
      ),
    },
    {
      name: "Sign In",
      Link: "#",
      icon: (
        <PiSignInFill
          size={collapsed ? 28 : 20}
          className={pathname === "#" && `text-theme-dark`}
        />
      ),
    },
  ];

  return (
    <div
      className="sideBar hidden md:flex"
      id={collapsed ? `sideBar-collapsed` : `sideBar-expanded`}
      data-collapsed={collapsed ? "true" : "false"}
    >
      {/*First half -logo && pages links*/}
      <div className="sideBarTop flex flex-col gap-5">
        <div className="nav-header  mb-2">
          {collapsed ? (
            <div className="flex justify-center">
              <Logo height={"auto"} width={40} />
            </div>
          ) : (
            <div className="nav-header-expanded flex justify-between items-center mt-3  ml-[15px] mr-[5px]">
              <FullLogo height={"auto"} width={140} />
              <button className="relative group rounded-full hover:bg-highlight p-1">
                <BiArrowToLeft
                  size={collapsed ? 28 : 20}
                  onClick={toggleCollapse}
                  className="relative group"
                />

                <span className="absolute left-1/3 top-[120%]  hidden w-max -translate-x-[60%] bg-theme-dark text-white text-xs rounded py-1 px-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
                  Collapse
                </span>
              </button>
            </div>
          )}
        </div>

        <button
          className={
            collapsed
              ? `hidden`
              : `new-thread-btn mx-[15px] transition-colors duration-300 border hover:border-theme-color bg-[#fff] rounded-full  flex text-sm justify-between p-2 px-3`
          }
        >
          New Thread
          <div className="flex gap-1">
            <span className=" border border-gray-300 tracking-wider px-1 text-xs rounded shadow-sm">
              ctrl
            </span>
            <span className=" border border-gray-300 tracking-wider px-1 pt-[1px] text-xs font-serif rounded shadow-sm">
              I
            </span>
          </div>
        </button>
 
        <div className={`nav-items flex flex-col justify-center gap-1`}>
          {sideBarItem.map((item, index) => (
            <Link to={item.Link}>
              <div
                key={index}
                className={`${
                  pathname === item.Link && collapsed
                    ? "border-r-4 border-theme-dark"
                    : ""
                } 
                ${
                  collapsed
                    ? "nav-item flex justify-center relative group py-2 px-5 rounded hover:bg-highlight hover:text-theme-dark w-full"
                    : "nav-item pl-[15px] group hover:bg-highlight hover:text-theme-dark flex gap-2 items-center w-full py-2"
                }`}
              >
                {item.icon}
                <span className="tooltip absolute left-[100%] top-1/2 ml-2 hidden w-max -translate-y-1/2 bg-theme-dark text-white text-xs rounded py-1 px-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
                <span
                  className={
                    pathname === item.Link ? `label text-theme-dark` : `label`
                  }
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <button
          className={
            collapsed
              ? `hidden`
              : `signUp-btn mx-[15px] transition-colors duration-300 border bg-theme-color  hover:bg-[#448894] text-[#fff] rounded-full  flex  justify-center p-2 px-3`
          }
        >
          Sign up
        </button>
      </div>
      {/*last half -try pro, download && social links*/}
      <div className="sideBarBottom flex justify-center">
        <div
          className={
            collapsed
              ? `hidden`
              : `sideBarBottom flex flex-col mx-[15px] transition-all duration-300`
          }
        >
          <a href="#" className="text-theme-dark hover:text-theme-color">
            Try Pro
          </a>
          <span className="text-gray-dark text-sm ">
            Upgrade for image upload, smarter AI, and more Pro Search.
          </span>
          <button className="p-1 flex gap-2 my-2 rounded-md items-center w-fit px-2 py-1 text-theme-dark hover:text-gray-dark bg-highlight">
          <TfiArrowTopRight size={14} className="-mb-1"/> Learn More
          </button>
           
           {/*last row download and social links*/}
           <hr className="w-full h-0 border border-[0.5 px] border-border-color my-2"/>
          <div className="download_links flex justify-between">
          <button className="transition-colors duration-300 text-sm  hover:text-theme-dark  hover:bg-highlight text-gray-dark rounded-full items-center gap-1 flex  justify-center  py-1 px-2"><CiMobile4 size={17}/>Download</button>
          <div className="flex gap-2">
            <button  className="transition-colors duration-300 text-sm  hover:text-theme-dark  hover:bg-highlight text-gray-dark rounded-full items-center gap-1 flex  justify-center  py-1 px-2"><FaXTwitter/></button>
            <button className="transition-colors duration-300 text-sm  hover:text-theme-dark  hover:bg-highlight text-gray-dark rounded-full items-center gap-1 flex  justify-center  py-1 px-2"><FaDiscord/></button>
          </div>
          </div>

        </div>
        <button
          className={
            collapsed
              ? `collapse-btn relative group  rounded-full hover:bg-highlight p-1`
              : `hidden`
          }
        >
          <BiArrowToRight size={collapsed ? 28 : 20} onClick={toggleCollapse} />
          <span className="absolute left-[100%] top-1/2 ml-2 hidden w-max -translate-y-1/2 bg-theme-dark text-white text-xs rounded py-1 px-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
            Expand
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
