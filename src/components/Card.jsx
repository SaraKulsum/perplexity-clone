import React from "react";
import { CiBookmark } from "react-icons/ci";


const Card = ({ card, index }) => {
    let title = card.title.split(" ").join("-");

  return (
    <a href={`page/${title}/${card.id}`} className={`${index === 0 || index % 4 === 0 ? `col-span-3` : `col-span-3 md:col-span-1`}`}>
    <div
      key={card.id}
      className={`${
        index === 0 || index % 4 === 0 ? `col-span-3` : `col-span-3 md:col-span-1`
      } bg-primary-color hover:cursor-pointer hover:scale-[1.008] transition-transform shadow-sm rounded-lg overflow-hidden border border-solid-[#e5e7eb]`}
    >
      <img
        src={card.image}
        alt={card.title}
        className={`w-full ${
          index === 0 || index % 4 === 0 ? "h-auto md:h-64" : "h-auto md:h-40"
        } w-full object-top object-cover `}
      />
      <div className={`flex flex-col gap-4 p-4 h-[140px] md:h-[170px]`}>
        <div className="title_description  h-full ">
          <h2
            className={`${
              index === 0 || index % 4 === 0 ? "text-normal md:text-lg" : "text-normal"
            } font-semibold text-theme-dark mb-1`}
          >
            {card.title}
          </h2>
          <p className={`${index === 0 || index % 4 === 0 ? `text-normal ` : `text-sm`} line-clamp-2 text-gray-600`}>
            {card.description}
          </p>
        </div>
        <div className="logoAndSaveBtn flex justify-between flex-1">
          <span className="flex gap-1 items-center text-xs text-gray-dark">
            <img
              className="h-4 w-auto object-cover rounded-full"
              src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail"
              alt="elymc"
            />
            elymc
          </span>
          <button>
            <CiBookmark />
          </button>
        </div>
      </div>
    </div>
    </a>
  );
};

export default Card;
