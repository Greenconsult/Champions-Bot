import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import PopUp from '../components/popup/PopUp'; // Adjust the path based on your folder structure
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SlickComponent from '../components/Common/SlickSlider/SlickComponent';
import { SlickSetting } from '../components/Common/SlickSlider/SlickSetting';
import bannerImg from '../public/assets/img/image/banner.jpg';
import TopHeader from '../components/Common/TopHeader/index';
import Footer from '../components/Footer';
import langchainAppStore from '../stores';
import Image from 'next/image';

const Home: NextPage = () => {
  const setSelectedList = langchainAppStore((state: any) => state.informationStore.setSelectedList);
  const [showPopUp, setShowPopUp] = useState(false);

  // Function to show the chat pop-up
  const showChatPopUp = () => {
    setShowPopUp(true);
  };

  // Function to close the pop-up
  const closePopUp = () => {
    setShowPopUp(false);
  };

  useEffect(() => {
    // Set a timeout to show the pop-up after 10 seconds
    const timeoutId = setTimeout(() => {
      showChatPopUp();
    }, 10000);

    // Clear the timeout if the component is unmounted or if you navigate away
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>      
     <main>
        <div className="h-[100%] m-auto relative">
          <TopHeader className="relative z-10 px-6 2xl:px-[8rem] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          <div>
            <div>
              <Image src={bannerImg} className="w-full" alt="Banner" />
            </div>
            <div className="flex-col justify-start items-start mt-10 gap-6 xl:gap-10 absolute left-[10%] sm:bottom-[30px] lg:bottom-0 z-[9999]">
              <div className="max-w-[225px] w-full">
                <Link href="/qa">
                  <button
                    className={`text-lg text-white font-bold justify-center items-center flex gap-1 px-[10px] py-[20px] cursor-pointer text-center rounded h-full bg-[#F05423] w-full`}
                  >
                    Camp bot
                  </button>
                </Link>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
      {showPopUp && <PopUp onClose={closePopUp} />}
    </>
  );
};

export default Home;
