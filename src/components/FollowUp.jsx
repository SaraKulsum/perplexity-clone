import React from 'react'
import { IoGitNetworkOutline } from "react-icons/io5";

const FollowUp = () => {
  return (
    <div className="fixed bottom-20 left-0 md:left-[unset] md:bottom-7 mx-5 w-[90%] md:w-[50%] bg-highlight p-1 h-fit  rounded-full overflow-hidden">
    <div className="bg-white h-fit w-full border-[2px] border-[#d1d1cc] rounded-full px-4 py-2 flex gap-3 items-center overflow-hidden">
      <textarea
        className="outline-none border-none w-full"
        name="askFollowUp"
        rows={1}
        id="askfollowup"
        placeholder="Ask follow-up"
      ></textarea>

      <div className="switchContainer flex items-center gap-1">
      <label className="toogle-switch relative inline-flex cursor-pointer items-center">
        <input id="switch" type="checkbox" className="peer sr-only " />
        <label for="switch" className="hidden "></label>
        <div className="peer h-5 w-9 rounded-full border bg-inherit after:absolute after:left-[2px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-dark after:bg-gray-dark after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white "></div>               
      </label>
      <span className="text-sm text-gray-dark font-[500]">Pro</span>
      </div>

      <button className="text-gray-dark hover:text-theme-dark hover:bg-highlight p-2 rounded-full"><IoGitNetworkOutline/></button>
  
    </div>
  </div>
  )
}

export default FollowUp