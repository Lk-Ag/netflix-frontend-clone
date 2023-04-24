import React from "react";
import data from "../Data";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {MdChevronLeft,MdChevronRight} from "react-icons/md";
const Row = ({ title, len,rowId }) => {

    const movies = data.slice(len);
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-0 m-2 ">
              <img
                className="w-full h-full block"
                src={item.imageurl}
                alt={item.title}
              ></img>
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
              <p>
                  {false ? (
                    <FaHeart classname="absolute top-4 left-4 text-gray-300" />
                  ) : (
                    <FaRegHeart classname="absolute top-4 left-4 text-gray-300 " />
                  )}
                </p>
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item.title}
                </p>
               
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
      </div>
    </>
  );
};

export default Row;
