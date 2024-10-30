import React from 'react'
import { FaLink } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

const SourceLinkCopy = () => {
  return (
    <div className="source_link_copy hover:cursor-pointer flex gap-4 items-center mt-4">
    <span className="rounded-full group transition-all duration-300 flex h-6 w-28 overflow-hidden items-center py-4 px-2 border-[0.5px]  border-gray-300">
      <img
        className="h-[20px] w-auto rounded-full border"
        src="https://www.google.com/s2/favicons?sz=128&amp;domain=news.mit.edu"
        alt="icon"
      />
      <img
        className="h-[20px] w-auto rounded-full transition-all duration-200 group-hover:ml-0 -ml-2 border"
        src="https://www.google.com/s2/favicons?sz=128&amp;domain=youtube.com"
        alt="youtubeIcon"
      />
      <span className="mx-1 text-xs text-gray-dark  font-[700] overflow-hidden whitespace-nowrap">
        2 sources
      </span>
    </span>

    <button className="text-gray-dark hover:text-theme-dark hover:bg-highlight p-2 rounded-full">
      <FaLink />
    </button>
    <button className="text-gray-dark hover:text-theme-dark hover:bg-highlight p-2 rounded-full">
      <MdContentCopy />
    </button>
  </div>
  )
}

export default SourceLinkCopy