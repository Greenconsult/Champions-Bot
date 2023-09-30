import React, { useEffect, useRef, useState } from 'react';
import TopHeader from '../../components/Common/TopHeader/index';
import Body from './Body';
import InputBox from './Input';
interface ChatProps {
  chatBot?: boolean;
}
const Chat: React.FC<ChatProps> = ({ chatBot }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [inputBoxHeight, setInputBoxHeight] = useState<number>(100);
  const [inputText, setInputText] = useState<string>('');
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      console.log(chatContainerRef.current.scrollHeight);
    }
  };
  // Initialize the MutationObserver
  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    // Create a new instance of MutationObserver
    const observer = new MutationObserver(scrollToBottom);

    // Configuration for the observer
    const config = { childList: true, subtree: true };

    // Start observing changes in the chat container
    if (chatContainer) {
      observer.observe(chatContainer, config);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputBoxHeight = (height: number) => {
    setInputBoxHeight(height);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
    }
  };
  return (
    <>
      {!chatBot && <TopHeader bgColor="bg-[#171717]" />}
      <div
        className={`chat-container w-[90%] flex justify-center overflow-y-hidden mx-auto bg-[#fcf6f6] h-[calc(_100vh_-_175px)] ${
          !chatBot && 'mt-[119px]'
        }`}
      >
        <div
          className={`body-container w-[100%] overflow-y-auto p-[15px] ${
            chatBot ? 'h-[calc(_100vh_-_140px)]' : 'h-[calc(_100vh_-_215px)]'
          }`}
          ref={chatContainerRef}
        >
          <Body chatBot={chatBot} />
        </div>
        {chatBot && (
          <div className="absolute bottom-[140px] h-[1px] shadow-2xl shadow-white bg-slate-400 rounded-full max-w-[1200px] w-full"></div>
        )}
        <div className="input-container fixed bottom-[40px] max-w-[700px] m-auto w-[100%]">
          <InputBox
            handleHeightChange={handleInputBoxHeight}
            defaultHeight={inputBoxHeight}
            value={inputText}
            onKeyPress={handleKeyPress}
            chatBot={chatBot}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
