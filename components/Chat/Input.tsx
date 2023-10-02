import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Assets
import sendIcon from '../../public/assets/img/icon/send.svg';

//Store
import { MessageType } from '../../models/Types';
import langchainAppStore from '../../stores';
import useColorStore from '../../stores/colorStore';
interface InputBoxProps {
  chatBot?: boolean;
  handleHeightChange: (height: number) => void;
  defaultHeight: number;
  value: string; // The current input text
  onKeyPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
const InputBox: React.FC<InputBoxProps> = ({ chatBot = false, handleHeightChange, defaultHeight }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const parentDivRef = useRef<HTMLDivElement>(null);
  const updateChat = langchainAppStore((state: any) => state.chatStore.updateChat);
  const updateLastQuery = langchainAppStore((state: any) => state.chatStore.updateLastQuery);
  const selectedlist = langchainAppStore((state: any) => state.informationStore.selectedlist);
  const { value, updateValue } = useColorStore();
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);

  const [selectedColor, setSelectedColor] = useState<string>('');
  const colorDisplayStyle = { backgroundColor: selectedColor };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    updateValue(newColor);
    localStorage.setItem('selectedColor', newColor);
  };
  const handleSendClick = () => {
    updateLastQuery({ message: message, done: false });
    updateChat({ message: message, id: uuidv4(), type: MessageType.User });
    updateChat({ message: '', id: uuidv4(), type: MessageType.Bot });
    setMessage('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendClick();
    }
  };

  useEffect(() => {
    if (textareaRef.current && parentDivRef.current) {
      const textareaHeight = textareaRef.current.scrollHeight;
      parentDivRef.current.style.height = `${textareaHeight}px`;
    }
  }, [message]);
  const maxTextareaHeight = 70;
  const normalTextAreaHeight = 60;

  useEffect(() => {
    if (textareaRef.current && parentDivRef.current) {
      const textareaHeight = textareaRef.current.scrollHeight || 0;

      parentDivRef.current.style.height =
        textareaHeight > maxTextareaHeight ? `${maxTextareaHeight}px` : `${textareaHeight}px`;
      parentDivRef.current.style.borderRadius = textareaHeight > normalTextAreaHeight ? `20px` : `9999px`;

      handleHeightChange(textareaHeight);
    }
  }, [message, handleHeightChange]);

  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      setSelectedColor(savedColor);
      updateValue(savedColor);
    }
  }, [selectedColor, updateValue]);
  return (
    <>
      {!chatBot && (
        <div className={`${!chatBot && 'flex'} sm:px-[20px] md:px-0 max-w-[700px]`}>
          <div ref={parentDivRef} className={`${!chatBot ? 'flex-1 h-[45px]' : 'flex h-12'}  `}>
            <textarea
              ref={textareaRef}
              className={`w-full h-full p-2 resize-none border border-gray-300 focus:outline-none focus:border-blue-500 overflow-hidden`}
              placeholder={selectedlist.type === '0' ? 'Ask any question....' : 'Ask any question....'}
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Add the event handler for Enter key press
            ></textarea>
          </div>
          <button
            style={{ backgroundColor: '#44557B' }}
            className={`px-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none`}
            onClick={handleSendClick}
          >
            <Image src={sendIcon} alt="send icon" />
          </button>
        </div>
      )}
      {chatBot && (
        <>
          <div className="flex md:gap-3">
            <div className="inline-block">
              <label className="cursor-pointer  fill-white focus:outline-none bg-primary-2 flex flex-col items-center rounded p-1">
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path>
                </svg>
                <input type="color" className="h-0 w-0" value={selectedColor} onChange={handleColorChange} />
              </label>
              {/* <div className="mt-4 h-16 w-16 border border-gray-300" style={colorDisplayStyle}></div> */}
            </div>
            <div className="w-full">
              <span
                ref={parentDivRef}
                className="w-full overflow-hidden flex items-center justify-center bg-white border border-r-none border-gray-500 dark:border-white-1"
              >
                <textarea
                  ref={textareaRef}
                  className={`w-full h-full px-8 md:py-[15px] lg:py-[18px] py-[18px] resize-none text-justify outline-none`}
                  placeholder={selectedlist.type === '0' ? 'Ask any question....' : 'Ask any question....'}
                  value={message}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  style={{
                    maxHeight: maxTextareaHeight,
                    overflowY: (textareaRef.current?.scrollHeight || 0) >= maxTextareaHeight ? 'auto' : 'hidden',
                    borderRadius: (textareaRef.current?.scrollHeight || 0) >= maxTextareaHeight ? '20px' : '50px'
                  }}
                ></textarea>
                <div className="w-[58px] h-[58px] ml-2"></div>
                <button
                  style={{ backgroundColor: value }}
                  className={`ml-1 z-50 absolute -right-0 text-white w-[58px] h-[58px] rounded-full ${
                    isSendButtonDisabled ? 'cursor-not-allowed' : 'text-cyan-400 focus:outline-none'
                  }`}
                  onClick={handleSendClick}
                  disabled={isSendButtonDisabled}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" className="">
                      <path
                        d="M3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457ZM5 4.38261V11.0001H10V13.0001H5V19.6175L18.8499 12.0001L5 4.38261Z"
                        fill="rgba(173,184,194,1)"
                      ></path>
                    </svg>
                  </div>
                </button>
              </span>
              {/* send button */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InputBox;
