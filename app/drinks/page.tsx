"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDrinkingData } from "../services/api";

type Drink = {
  name: string;
  description: string;
  price: string;
  category: string;
};
export default function Drinks() {
  const [drinkData, setDrinkData] = useState<Drink[]>([]);
  const fetchData = async () => {
    const respocne = await getDrinkingData();
    // console.log(respocne)
    setDrinkData(respocne?.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(drinkData)
  return (
    <>
      <div
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/dnsDrink.png')",
          backgroundSize: "cover",
          backgroundPosition:'center'
        }}
      >
        <div className="flex items-center justify-between text-white  bg-black/80 w-full  min-h-screen">
          <Image
            src={"/dnsSide.png"}
            width={160}
            height={200}
            alt="side"
            className="hidden md:flex"
          />

          <div className=" md:w-[100rem] w-[33rem] border-2 border-white min-h-[50vh] rounded-sm m-4 mt-14">
            <div className="flex flex-row items-center justify-between mt-5 ">
              <div className="md:-mt-40 md:-ms-12 -mt-7 ">
                <img src="/dnsJuice.png" width={200} alt="" />
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-gray-600 w-[4rem] h-1"> </div>
                <div className="mx-10 md:text-5xl text-xl font-bold text-center">
                  DRINKS
                </div>
                <div className="bg-gray-600 w-[4rem] h-1"> </div>
              </div>

              <div className="md:w-40 w-24"></div>
            </div>

            <div className="p-10 flex flex-wrap justify-between items-center">
              {drinkData.map((drink,index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/2 mb-4 md:mb-0 mt-5">
                  <h1>
                    {drink.name.toUpperCase()}..........................$
                    {drink.price}
                  </h1>
                  <p className="text-gray-600">{drink.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-end justify-end">
              <img
                src="/dnsCocktail.png"
                className="-mt-44 w-24 md:w-52"
                alt=""
              />
            </div>
          </div>

          <Image
            src={"/dnsSide.png"}
            width={160}
            height={100}
            alt="side"
            className="hidden md:flex"
          />
        </div>
      </div>
    </>
  );
}
