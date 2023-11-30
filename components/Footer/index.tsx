import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-blue">
      <div className="text-white text-center py-7 md:py-1.5 text-sm md:text-sm">
        &copy; {new Date().getFullYear()} Camp Bot|
        <br className="md:hidden" />
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

