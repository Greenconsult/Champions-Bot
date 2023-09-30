// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import hmIcon from '../../../public/assets/img/icon/Mini Logo icon.png';
import logo from '../../../public/assets/img/image/icon.png';
import closeIcon from '../../../public/assets/img/icon/close Icon.svg';
import openIcon from '../../../public/assets/img/icon/open icon.svg';
import TopHeaderButton from '../TopHeaderButton';

const Index = ({ bgColor }: any) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [tokenFound, setTokenFound] = useState<boolean>(false);

  let tokenExist = false;
  if (typeof window !== 'undefined') {
    tokenExist = !!localStorage.getItem('token');
  }

  useEffect(() => {
    setTokenFound(tokenExist);
  }, [tokenExist]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`absolute top-0 left-0 z-[9999999] justify-center flex flex-col bg-[#FFFFFF] w-full`}>
      <div className="flex items-center w-full px-6 2xl:px-[8rem] justify-between gap-4  box-border">
        <Link href={'/'}>
          <div className="cursor-pointer xl:py-[19px] pb-1 pt-2 w-[120px]">
            <Image src={logo} className="w-full" alt="Champions" />
          </div>
        </Link>
        <div className="xl:hidden bg-[#596781] w-20 rounded h-[70px] justify-center items-center flex">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
            aria-label="Open menu"
          >
            {showMenu ? (
              <Image src={closeIcon} alt="Close burger icon" />
            ) : (
              <Image src={openIcon} alt="Open burger icon" />
            )}
          </button>
        </div>
        <div
          className={`xl:flex items-center justify-center hidden gap-[15px] xl:flex-row ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <TopHeaderButton href="/" text="HOME" />
          <TopHeaderButton href="https://selar.co/m/paraclete?page=1" text="BOOKS" target="_blank" />
          <TopHeaderButton href="https://www.biblegateway.com" text="BIBLE" target="_blank" />
          <TopHeaderButton href="https://www.youtube.com/@amosfenwatv1905" text="AMOS FENWA TV" target="_blank" />
        </div>
        <div className={`xl:hidden shadow-2xl absolute top-[85px] right-0 p-[0px] ${showMenu ? 'block' : 'hidden'}`}>
          <div className="drop-shadow-2xl xl:text-[#4c5758] text-black shadow-2xl md:bg-clip-padding rounded w-[180px] flex items-start gap-[5px] flex-col">
            <TopHeaderButton href="/" text="Home" mblBG={true} />
            <TopHeaderButton href="https://selar.co/m/paraclete?page=1" text="BOOKS" target="_blank" mblBG={true} />
            <TopHeaderButton href="https://www.biblegateway.com" text="BIBLE" target="_blank" mblBG={true} />
            <TopHeaderButton href="https://www.youtube.com/@amosfenwatv1905" text="AMOS FENWA TV" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
