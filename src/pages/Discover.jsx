import React, { useState, useMemo } from "react";
import DiscoverLayout from "../layouts/DiscoverLayout";
import { IoEarth } from "react-icons/io5";
import Filters from "../components/Filters";
import Card from "../components/Card";
import cardsData from "../Data.json";

const Discover = () => {
  const [activeFilter, setActiveFilter] = useState("top");
  let filteredData = useMemo(() => {
    if (activeFilter === "top") {
      return cardsData;
    } else {
      console.log(activeFilter);

      return cardsData.filter((current) => activeFilter === current.category);
    }
  }, [activeFilter]);

  return (
    <DiscoverLayout>
      <div className="md:mt-2 md:mr-2 bg-white  rounded-lg">
        <div className="w-full lg:w-[700px]  px-5  lg:px-0 py-4 mx-auto ">
          <h2 className="flex justify-start items-center text-3xl">
            <IoEarth />
            Discover
          </h2>
        </div>
        <hr className="w-full border-[0.2px]" />
        <div className="flex flex-col justify-center w-full items-center px-5  lg:px-10 ">
          {/*---filter tabs---*/}
          <Filters setActiveFilter={setActiveFilter} />

          {/*---cards according to selected filter---*/}
          <div className="grid grid-cols-3 gap-4 w-full lg:w-[700px]">
            {filteredData.map((card, index) => (
              <Card card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </DiscoverLayout>
  );
};

export default Discover;
