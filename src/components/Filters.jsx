
import React, { useState, useRef, useEffect } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlinePalette } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { LiaMedalSolid } from "react-icons/lia";

const Filters = ({setActiveFilter}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderStyle, setSliderStyle] = useState({});
    const navRef = useRef(null);
    
    const tabs = [
      { name: "Top", value: "top", icon: <FaRegStar size={17} /> },
      { name: "Tech & Science", value: "tech&science", icon: <GrTechnology size={17} /> },
      { name: "Finance", value: "finance", icon: <AiOutlineDollar size={17} /> },
      { name: "Arts and Culture", value: "arts&culture", icon: <MdOutlinePalette size={17} /> },
      { name: "Sports", value: "sports", icon: <FaTv size={17} /> },
      { name: "Entertainment", value: "entertainment", icon: <LiaMedalSolid size={17} /> },
    ];
  
    // Update slider position when active tab changes
    useEffect(() => {
      if (navRef.current) {
        const activeTab = navRef.current.children[activeIndex];
        setSliderStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });
      }
    }, [activeIndex]);

    const handleClick = (index, category) => {
        setActiveIndex(index)
        setActiveFilter(category)
    }
  
  return (
    <div className="w-full lg:w-[720px] px-[10px] bg-white opacity-[0.95]  backdrop-blur-md sticky top-0 z-50">
      <div className="  overflow-x-auto">
        <ul
          ref={navRef}
          className="relative flex items-center z-20 justify-between min-w-[700px] overflow-x-auto   py-4"
        >
          {tabs.map((item, index) => (
            <li
              key={item.name}
              onClick={()=>{handleClick(index, item.value)}}
              className={`relative px-2  text-sm text-theme-dark  cursor-pointer transition-colors duration-200 ${
                activeIndex === index ? "text-theme-color" : "hover:text-[#9b9a9a]"
              }`}
            >
              <span className="flex items-center gap-1">
                {item.icon} {item.name}
              </span>
            </li>
          ))}
          <li className="py-2 px-4 text-theme-dark text-sm flex items-center gap-1 hover:text-[#9b9a9a] cursor-pointer transition-colors duration-200">
            <IoOptionsOutline size={17} />
          </li>

          {/* The sliding selector */}
          <div
            className="absolute  top-[20%] bottom-[20%] rounded-md h-[60%] -z-10 bg-[#bde7e77a] transition-all duration-300"
            style={sliderStyle}
          />
        </ul>
      </div>
    </div>
  )
}

export default Filters