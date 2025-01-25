"use client"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className=" w-full bg-black ">
        <div className="h-16 flex items-center justify-between px-5 md:px-10">
         <div className="md:hidden">
            {/* this is for the obile responcive becouse of the the image is to be the center  */}
         </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/dnsLogo.png"}
              alt="dnslogo"
              width={100}
              height={100}
              className="mt-16"
            />
            <div className="hidden md:block text-3xl mt-16 font-medium">
              <div className="flex items-center justify-center">
                <span className="text-blue-600">DEEP</span>
                <span className="text-white ms-3">NET</span>
              </div>
              <span className="text-white">SOFT</span>
            </div>
          </div>

          
          <div className="hidden md:block mt-8">
            <Link href={""} className="text-white font-medium ms-10 hover:text-blue-600">
              HOME
            </Link>
            <Link href={""} className="text-blue-600 font-medium ms-10 hover:text-blue-600">
              MENU
            </Link>
            <Link href={""} className="text-white font-medium ms-10 hover:text-blue-600">
              MAKE A RESERVATION
            </Link>
            <Link href={""} className="text-white font-medium ms-10 hover:text-blue-600">
              CONTACT
            </Link>
          </div>

         
          <button
            className="block md:hidden text-white text-2xl"
            onClick={toggleMenu}
          >
            {
                isMenuOpen ? <FontAwesomeIcon icon={faX} /> :
                <FontAwesomeIcon icon={faBars} />
            }
           
          </button>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white mt-6">
            <div className="flex flex-col items-center p-5">
              <Link href={""} className="font-medium pe-2 hover:text-blue-600" onClick={toggleMenu}>
                HOME
              </Link>
              <Link href={""} className="font-medium pe-2 text-blue-600 " onClick={toggleMenu}>
                MENU
              </Link>
              <Link href={""} className="font-medium pe-2 hover:text-blue-600" onClick={toggleMenu}>
                MAKE A RESERVATION
              </Link>
              <Link href={""} className="font-medium pe-2 hover:text-blue-600" onClick={toggleMenu}>
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
