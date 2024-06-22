import React from "react";
import {Link, useNavigate} from "react-router-dom"

const Card = ({title,description,location}) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg bg-white shadow-lg w-72 px-10 py-8 mt-8 mb-8">
        
      <div className="text-2xl font-semibold">{title}</div>
      <div className=" font-medium mt-4 mb-4">
        {description.substring(0, 100)}...
      </div>
      <span className="font-medium text-sm mr-1">📍</span>
      <span className="opacity-50 font-medium text-sm">
        {location}
      </span>
      <div className="mt-5">
        <Link to='/card-details' className="bg-[#6522ad] text-white px-4 py-2 mt-4 rounded-lg hover:opacity-85">Enroll</Link>
      </div>
    </div>
  );
};

export default Card;
