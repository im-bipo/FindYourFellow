import React from "react";

//image
import hero from "../assets/images/herobanner.png";

//icons
import { IoFootball } from "react-icons/io5";
import { TbTrekking } from "react-icons/tb";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

import CardList from "../components/Cards/CardList";
import Filter from "../components/eventsFilter/Filter";

const Home = () => {
  let activities = [
    {
      id: "1",
      icon: (
        <IoFootball className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2 " />
      ),

      acitivityname: "Games",
    },
    {
      id: "2",
      icon: <TbTrekking className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2" />,
      acitivityname: "Trekking",
    },
    {
      id: "3",
      icon: (
        <GiFullMotorcycleHelmet className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2" />
      ),
      acitivityname: "Bike Ride",
    },
    {
      id: "4",
      icon: (
        <MdVolunteerActivism className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2" />
      ),
      acitivityname: "Volunteer",
    },
  ];
  return (
    <>
      <div className="relative bg-black">
        <img
          src={hero}
          alt=""
          className="h-[80vh] object-cover m-0 w-screen opacity-70"
        />
      </div>

      <div className="grid grid-cols-4 sm:flex justify-center w-full relative -top-[4rem]">
        {activities.map((activity) => (
          <div
            className="flex flex-col justify-center bg-white p-6  sm:p-10 shadow-blue-300 shadow-lg border-2 items-center transition duration-150 ease-in  transform  hover:-translate-y-1 hover:scale-110 hover:bg-sky-100 hover:rounded-md hover:cursor-pointer hover:z-20"
            key={activity.id}
          >
            {activity.icon}

            <span className="font-semibold text-[#352f36] sm:text-lg text-xs ">
              {activity.acitivityname}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 px-12  lg:px-36 text-center">
        Find Your Fellow is a user-friendly social networking app that connects
        you with people nearby who share your interests. It helps you find and
        connect with like-minded individuals, discover local events, and expand
        your social circle effortlessly.
        <div></div>
        <div className="mt-12 mb-9 w-full -mx-28 sm:-mx-5 lg:-mx-14">
          <Filter className="" />
        </div>
        <div className="">
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Home;
