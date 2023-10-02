import type { NextPage } from 'next';
import Link from 'next/link';
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

  return (
    <>
      <main>
        <div className="h-[100%] m-auto relative">
          <TopHeader className="relative z-10 px-6 2xl:px-[8rem] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          <div>
            <div>
              <Image src={bannerImg} className="w-full" alt="Banner" />
            </div>
            <Slider
              {...SlickSetting}
              afterChange={(currentTarget) => {
                if (currentTarget === 0) {
                  setSelectedList({
                    namespace: 'data_science',
                    title: 'BSC Computer science',
                    type: '0'
                  });
                } else {
                  setSelectedList({
                    namespace: 'ai',
                    title: 'MSC Data Science and AI',
                    type: '1'
                  });
                }
                console.log(currentTarget);
              }}
            >
              <div className="">
                <SlickComponent
                  header="BSc Computer Science"
                  paragraph="Hey, welcome to the chatbot app for the BSc Computer science course. The course aims to produce software developers
                    who can seamlessly make the transition from University to the international computer industry.
                    My name is JayBot. I can help you with general enquiries abou the course."
                />
              </div>
              <div className="">
                <SlickComponent
                  header="MSc Data Science and AI"
                  paragraph="Hey, welcome to the chatbot app for the MSc Artificial Intelligence (AI) course. The MSc Data and Artificial Intelligence 
                    are conversion MSc, for students from various disciplines.
                    My name is JayBot. I can help you with general enquiries about the course."
                />
              </div>
            </Slider> 
            <div className="flex-col justify-start items-start mt-10 gap-6 xl:gap-10 absolute left-[10%] sm:bottom-[30px] lg:bottom-0 z-[9999]">
              <div className="max-w-[225px] w-full">
                <Link href="/qa">
                  <button
                    className={`text-lg text-white font-bold justify-center items-center flex gap-1 px-[10px] py-[20px] cursor-pointer text-center rounded h-full bg-[#F05423] w-full`}
                  >
                    Chat With Gloria
                  </button>
                </Link>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
