import { NextPage } from 'next';
import Chat from '../components/Chat';

const ChatBot: NextPage = () => {
  return (
    <main className="bg-white">
      <Chat />
    </main>
  );
};

export default ChatBot;
