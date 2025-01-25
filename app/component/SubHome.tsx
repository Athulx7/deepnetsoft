"use client"

import { useState } from "react";
import Drinks from "../drinks/page";
import Food from "../food/page";
import Brunch from "../brunch/page";

export default function SubMenu() {
    const [selectedPage, setSelectedPage] = useState('drinks');
    const handleClick = (page:string) => {
        setSelectedPage(page); 
      };
  return (
    <>
      <div className="relative w-full h-[9vh] flex items-center justify-center" style={{backgroundImage:"url('/dnsSub.png')",backgroundSize:"fill"}}>

        <div className="flex items-center justify-center text-white z-10 bg-black/90 w-full h-[9vh]">
         <button  onClick={() => handleClick('food')} className="bg-black px-10 py-2 border border-blue-600 hover:border-4 font-bold ">
         FOOD
         </button>

         <button onClick={() => handleClick('drinks')} className="bg-blue-600 px-10 py-2 border border-blue-600 hover:border-4 ms-6 font-bold">
         DRINKS
         </button>

         <button  onClick={() => handleClick('brunch')} className="bg-black px-10 py-2 border border-blue-600 hover:border-4 ms-6 font-bold">
         BRUNCH
         </button>
        </div>
      </div>



      <div className="">
        {selectedPage === 'drinks' && <Drinks />}
        {selectedPage === 'food' && <Food />}
        {selectedPage === 'brunch' && <Brunch />}
       
      </div>
    </>
  );
}
