import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className=" p-5  bg-black text-white ">
        <div className="flex flex-col md:flex-row justify-center items-center mt-20">
          <div className="w-72 h-32 border-2 border-white rounded-lg flex flex-col items-center justify-center md:ms-10 mt-12 md:mt-0 order-2 md:order-1">
            <h3 className="text-md text-blue-600 font-medium mt-5">
              CONNECT WITH US
            </h3>
            <div className="mt-3 ">
              <div className="flex  items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-yellow-500 mt-1"
                />
                <span className="ms-2 text-gray-500">+91 9567843340</span>
              </div>
              <div className="flex mt-1  items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow-500 mt-1"
                />
                <span className="ms-2 text-gray-500">info@deepnetsoft.com</span>
              </div>
            </div>
          </div>

          <div className="w-72 h-32 border-2 border-white rounded-lg flex flex-col items-center justify-center md:ms-10 mt-12 md:mt-0 order-1 md:order-2">
            <Image
              src={"/dnsFootLogo.png"}
              alt="dnslogo"
              width={70}
              height={70}
              className="-mt-[60px]"
            />

            <div className="text-center text-xl mt-5 flex font-medium">
              <span className="text-blue-600">DEEP</span>
              <span className="text-white ms-2">NET</span>
              <span className="text-gray-500 ms-2">SOFT</span>
            </div>

            <div>
              <Link href={""} className="text-white ms-3">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </Link>
              <Link href={""} className="text-white  ms-3">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Link>
              <Link href={""} className="text-white  ms-3">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </Link>
              <Link href={""} className="text-white ms-3 ">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </div>
          </div>

          <div className="w-72 h-32 border-2 border-white rounded-lg flex flex-col items-center justify-center md:ms-10 mt-12 md:mt-0  order-3 md:order-2">
            <div className="w-72 h-32 border-2 border-white rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-md text-blue-600 font-medium mt-5">FIND</h3>
              <div className="mt-3 ">
                <div className="flex  items-center justify-between">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-yellow-500 mt-1 ms-8"
                  />
                  <span className="ms-5 text-gray-500 ">
                    First floor, Geo infopark, Infopark EXPY, Kakkanad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1b1a1a] flex flex-col md:flex-row md:items-center md:justify-between p-4">
        <span className="text-[#897d7d] text-center md:ms-16">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </span>

        <div className="text-[#897d7d] text-center md:text-right md:me-16 mt-2 md:mt-0">
          <span className=" md:inline me-4 ">Terms & Conditions</span>
          <span className=" md:inline ">Privacy Policy</span>
        </div>
      </div>
    </>
  );
}
