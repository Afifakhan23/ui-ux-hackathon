import React from 'react';

const OurInstagram = () => {
  return (
    <div className="bg-hero-pattern bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[450px] w-full flex flex-col justify-center items-center p-4">
      <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
        Our Instagram
      </h2>
      <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
        Follow our store on Instagram
      </p>
      <button className="w-[180px] sm:w-[200px] md:w-[255px] h-[50px] sm:h-[56px] md:h-[64px] bg-mylightcolor rounded-full shadow-xl shadow-mylightblack text-[16px] sm:text-[18px] md:text-[20px] font-normal hover:bg-black hover:text-mylightorange">
        Follow Us
      </button>
    </div>
  );
};

export default OurInstagram;
