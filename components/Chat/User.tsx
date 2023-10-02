import React, { useEffect, useRef } from 'react';
import useColorStore from '../../stores/colorStore';
import Image from 'next/image';
import userImage from '../../public/assets/img/image/chatuser.png';
type UserProps = {
  content: string;
  chatBot?: boolean;
};
const User: React.FC<UserProps> = ({ content, chatBot }) => {
  const { value, updateValue } = useColorStore();

  const massageRef = useRef();
  let colorDisplayStyle;
  useEffect(() => {
    const color = localStorage.getItem('selectedColor');
    colorDisplayStyle = { backgroundColor: color };
  }, [value]);
  return (
    <div className="message user-message flex justify-end items-center gap-4 my-[10px]">
      <div 
        style={{ backgroundColor: '#BEA69F' }}
        className={`message-content text-[15px] ${!chatBot && 'bg-[#1777ff]'}`} 
      >
        {content}
      </div>  
      <div className="user-avatar">
        <Image src={userImage} width={40} height={40} alt="Champions" />
      </div>
    </div>
  );
};

export default User;
