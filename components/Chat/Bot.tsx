import React, { useState, useEffect } from 'react';
import langchainAppStore from '../../stores';
import { v4 as uuidv4 } from 'uuid';
import { IChat, MessageType } from '../../models/Types';
import Image from 'next/image';
import chatIcon from '../../public/assets/img/image/chatbot.png';

type BotProps = {
  content: string;
  first: boolean;
};

async function fetchData(query: string, namespace: string, setResultChunks: Function) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/api/pinecone/query/modification/index`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      index: 'champions-bot',
      query: query,
    })
  });

  if (!response.body) return '';

  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  let result = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    result += value;
    setResultChunks((prevChunks: any) => [...prevChunks, value]);
  }
  return result;
}

const Bot: React.FC<BotProps> = ({ content, first }) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const lastQuery = langchainAppStore((state: any) => state.chatStore.lastQuery);
  const updateLastQuery = langchainAppStore((state: any) => state.chatStore.updateLastQuery);

  const updateLastChat = langchainAppStore((state: any) => state.chatStore.updateLastChat);
  const selectedlist = langchainAppStore((state: any) => state.informationStore.selectedlist);
  const chat = langchainAppStore((state: any) => state.chatStore.chat);

  const [resultChunks, setResultChunks] = useState<string[]>([]);
  let lastChat: IChat = chat[chat.length - 1];

  useEffect(() => {
    const fetchBotData = async () => {
      const message = await fetchData(lastQuery.message, selectedlist.index, setResultChunks);
      lastChat.message = message;
      updateLastChat(lastChat);
      updateLastQuery({ message: lastQuery.message, done: true });
    };
    if (!lastQuery.done && !first) {
      fetchBotData();
    } else {
      setShowContent(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      resultDiv.scrollTop = resultDiv.scrollHeight;
    }
  }, [resultChunks]);

  return (
    <div className="message bot-message flex justify-start gap-4 my-[10px]">
      <div>
        <Image src={chatIcon} width={40} height={40} alt="Champions" />
      </div>
      <div id="result" className="message-content text-[15px] sm:max-w-[200px] lg:max-w-[500px]">
        {!showContent && <div dangerouslySetInnerHTML={{ __html: resultChunks.join('') }} />}
        {showContent && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  );
};

export default Bot;
