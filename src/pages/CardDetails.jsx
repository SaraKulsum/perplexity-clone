import React, { useRef, useState, useEffect } from "react";
import DiscoverLayout from "../layouts/DiscoverLayout";

import { IoBookmarkOutline } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import data from "../Data.json";

import { MdOutlineWatchLater } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { TbShare } from "react-icons/tb";

import FollowUp from "../components/FollowUp";
import ArticleWithImg from "../components/Articles/ArticleWithImg";
import Article from "../components/Articles/Article";
import ArticleWithBullets from "../components/Articles/ArticleWithBullets";

const CardDetails = () => {
  let { id } = useParams();
  let [section, setSection] = useState("");
  // Create refs dynamically for sections
  const sectionRefs = useRef([]);

  const FilterData = data.find((curr) => curr.id == id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.getAttribute("data-section-name"));
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    // Observe each section dynamically
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on unmount
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <DiscoverLayout>
      <div className="md:mt-2 md:mr-2  bg-pale-white border border-border-color  rounded-lg">
        <div className="navBar bg-inherit flex justify-end sticky top-0 z-[100] border-b-[0.5px] rounded-t-lg border-border-color">
          <ul className="flex gap-2  items-center my-2 mx-2">
            <li>
              <button className="border p-2 rounded-md">
                <IoBookmarkOutline size={15} className="stroke-theme-dark" />
              </button>
            </li>
            <li>
              <button className="border bg-theme-color  text-white p-2 rounded-md">
                <FiLink size={15} />
              </button>
            </li>
            <li>
              <button className="border bg-theme-color text-white p-1 px-2 rounded-md flex gap-2  items-center">
                <FaShare size={15} /> Share
              </button>
            </li>
          </ul>
       

        </div>
        {/*Banner */}
        <div className="bannerImage h-[27rem] w-full py-5 px-3 lg:px-5 flex justify-center">
          <img
            src={FilterData.image}
            alt="img"
            className="w-full lg:w-[90%] h-full   rounded-lg transition-transform duration-300  object-[50%_25%] hover:cursor-zoom-in hover:scale-[1.02] object-cover"
          />
        </div>
        
        <div className="mx-5 lg:mx-10 flex gap-8 justify-center">
          <div className="col1 w-full lg:w-[70%] flex flex-col gap-14 mb-40">
            {/*heading1 and introduction*/}
            <div
              ref={(el) => (sectionRefs.current[0] = el)}
              data-section-name="Introduction"
            >
              <h2 className="text-theme-dark font-[400] text-3xl md:text-4xl lg:text-5xl ">
                {FilterData.title}
              </h2>

              <div className="ContentInfoContainer flex justify-between text-gray-dark">
                <div className="flex gap-1 items-center  font-medium">
                  <img
                    className="h-7 md:h-8 w-auto object-cover rounded-full"
                    src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail"
                    alt="elymc"
                  />
                  <span className="flex flex-col text-xs md:text-base">
                    Curated By elymc
                    <span className="text-xs md:text-sm">1 min ago</span>
                  </span>
                </div>

                <div className="contentInfo flex gap-3 text-xs md:text-[15px] my-10 items-center font-medium">
                  <span className="flex gap-[2px] items-center">
                    <MdOutlineWatchLater />1 day ago
                  </span>
                  <span className="flex gap-1 items-center">
                    <FiEye />
                    3,561
                  </span>
                  <span className="flex gap-1 items-center">
                    <TbShare />
                    341
                  </span>
                </div>
              </div>

              <div className="Introduction text-[#13343b]">
                <p
                  className="text-[#13343b] 
  first-letter:text-5xl first-letter:font-bold 
  first-letter:mr-2 first-letter:float-left first-letter:top-0"
                >
                  {FilterData.description}
                </p>
              </div>
            </div>
            {/*Render arcticles dynamically depending on their types */}
            {FilterData.data.map((curr, index) => {
              if (curr.type === "image&Text") {
                return (
                  <ArticleWithImg
                    data={FilterData.data[index]}
                    ref={(el) => (sectionRefs.current[index + 1] = el)}
                  />
                );
              } else if (curr.type === "text") {
                return (
                  <Article
                    data={FilterData.data[index]}
                    ref={(el) => (sectionRefs.current[index + 1] = el)}
                  />
                );
              } else if (curr.type === "bulletPoints") {
                return (
                  <ArticleWithBullets
                    data={FilterData.data[index]}
                    ref={(el) => (sectionRefs.current[index + 1] = el)}
                  />
                );
              }
            })}

            <FollowUp />
          </div>
          {/*Navigates the current section displayed on screen*/}
          <div className="navigation sticky top-12 z-50 hidden lg:block h-[80vh]">
            <ul className="">
              <li
                className={`${
                  section === "Introduction"
                    ? `text-theme-dark`
                    : `text-[#7c7a7a]`
                } text-[15px]  font-medium transition-colors duration-300`}
              >
                - Introduction
              </li>
              {FilterData.data.map((ele) => (
                <li
                  className={`${
                    section === ele.heading
                      ? `text-theme-dark`
                      : `text-[#7c7a7a]`
                  } text-[15px]  font-medium transition-colors duration-300`}
                >
                  - {ele.heading}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </DiscoverLayout>
  );
};

export default CardDetails;
