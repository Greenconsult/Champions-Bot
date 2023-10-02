import React from 'react';

type SlickComponentProps = {
  header: string;
  paragraph: string;
  img: string;
};

const SlickComponent = ({ header, paragraph, img }: SlickComponentProps) => {
  return (
    <>
      <div className="w-full h-screen">
        {/* <div className="absolute top-0 left-0 h-full w-full object-cover z-[999] bg-black/[0.8]"></div> */}
        <img src={img} alt="" className="absolute top-0 left-0 h-[100%] w-full object-contain z-[99]" />
        <div className="absolute top-[50%] left-[10%] -translate-y-[50%] lg:w-[70%] md:w-[80%] sm:w-[80%] z-[9999999]">
          <div className="">
            <h1 className="text-white md:text-[60px] xl:text-[80px] text-[11vw]">{header}</h1>
          </div>
          <div className="">
            <p className="text-white md:text-3xl text:base">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickComponent;
