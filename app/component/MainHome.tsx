"use client"

import Image from "next/image";
import SubMenu from "./SubHome";
import { useState } from "react";


export default function MainHome() {
    const [selectedPage, setSelectedPage] = useState('drinks');
    const handleClick = (page:string) => {
        setSelectedPage(page); 
      };
  return (
    <>

    <div className="relative h-[40vh] md:h-[60vh]">
        <Image
          src="/dnsHomeImage.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="-z-10 md:object-cover object-contain"
        />

        <div className="flex flex-col items-center justify-center h-full text-white bg-black/50 px-4 w-full ">
          <h1 className="text-3xl md:text-5xl font-bold">{selectedPage.toUpperCase()}</h1>
          <p className="mt-4 text-sm md:text-lg text-center md:w-1/2 w-full text-gray-400 ">
          Please take a look at our menu featuring food, drinks, and brunch. If you&apos;d like to place an order, use the &quot;Order Online&quot; button located below the menu.
          </p>
        </div>
      </div>

    <div>
        <SubMenu selectedPage={selectedPage} onPageChange={handleClick} />
    </div>
      
    </>
  );
}
