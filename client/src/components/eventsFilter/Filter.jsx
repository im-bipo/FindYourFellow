import React, { useRef } from "react";
import FilterModal from "./filterModal";

const Filter = () => {
  return (
    <div className="flex justify-start items-center w-full px-28 sm:px-8 lg:px-24">
      <button className="flex items-center gap-4 h-full bg-[#39c868] text-white px-4 py-2 rounded-lg">
  
          
         <FilterModal className="w-full h-full" />
        
        
      </button>
    </div>
  );
};

export default Filter;
