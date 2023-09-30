import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-blue">
      <div className="flex flex-wrap py-[30px] items-center justify-start gap-5 gap-[15px] w-[100%]">
        <div className="text-white font-os text-center">
          <span className="text-[20px]">Connect With US: </span>
        </div>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/HCCSolutionArena"
            target="_blank"
            className="shadow-sm shadow-white bg-white hover:shadow-blue hover:bg-blue transition-all  w-[40px] h-[40px] rounded-full flex justify-center items-center"
            rel="noreferrer"
          >
            <svg
              className="w-[25px] h-[25px] transition-all fill-darkBlue"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCXseL16mRCPSXxIK5FApq0w"
            target="_blank"
            className="shadow-sm shadow-white  hover:shadow-blue gruop hover:bg-blue transition-all  w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center"
            rel="noreferrer"
          >
            <svg
              className="w-[25px] h-[25px] transition-all group-hover:fill-white fill-darkBlue"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.57 7.5a2.49 2.49 0 0 0-1.75-1.75C17.57 5 12 5 12 5s-5.57 0-7.82.75A2.49 2.49 0 0 0 2.43 7.5a27.89 27.89 0 0 0-.32 5.25 27.89 27.89 0 0 0 .32 5.25 2.49 2.49 0 0 0 1.75 1.75C6.43 19 12 19 12 19s5.57 0 7.82-.75a2.49 2.49 0 0 0 1.75-1.75 27.89 27.89 0 0 0 .32-5.25 27.89 27.89 0 0 0-.32-5.25zm-12.57 8.15V9.35L15.72 12z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/hccsolutionarena"
            target="_blank"
            className="shadow-sm shadow-white  hover:shadow-blue group hover:bg-blue transition-all  w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-white text-center py-7 md:py-1.5 text-sm md:text-sm">
        &copy; {new Date().getFullYear()} HolyGhost Christian Centre|
        <br className="md:hidden" />
        App designed by Julius Odede.
      </div>
    </footer>
  );
};

export default Footer;
