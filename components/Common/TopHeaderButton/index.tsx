import Link from 'next/link';
import React from 'react';

const TopHeaderButton = ({ href, text, mblBG = false }: any) => {
  return (
    <Link href={href}>
      <a target="_blank" rel="noopener noreferrer">
        <button
          className={`text-[16px] xl:text-base xl:text-[#4c5758] hover:text-[#F8A991] transition-all duration-300 text-black font-bold xl:justify-center xl:items-center flex md:gap-1 uppercase md:px-[20px] px-[14px] py-[11px] cursor-pointer text-center rounded xl:bg-transparent ${
            mblBG ? 'text-left w-full' : 'min-w-[0px]'
          }`}
        >
          {text}
        </button>
      </a>
    </Link>
  );
};

export default TopHeaderButton;
