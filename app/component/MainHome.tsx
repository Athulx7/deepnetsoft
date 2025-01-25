import Image from "next/image";

export default function MainHome() {
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
          <h1 className="text-3xl md:text-5xl font-bold">MENU</h1>
          <p className="mt-4 text-sm md:text-lg text-center md:w-1/2 w-full text-gray-400 ">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </div>
    </>
  );
}
