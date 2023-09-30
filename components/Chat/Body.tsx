import React from 'react';
import Bot from './Bot';
import User from './User';

//Store
import langchainAppStore from '../../stores';

//Models
import { IChat, MessageType } from '../../models/Types';
interface BodyProps {
  chatBot?: boolean;
}
const Body: React.FC<BodyProps> = ({ chatBot }) => {
  const chat = langchainAppStore((state: any) => state.chatStore.chat);

  return (
    <div className={`chat-body p-[10px] m-auto flex flex-col gap-[20px]`}>
      {chat.map((message: IChat, index: number) => (
        <React.Fragment key={message.id}>
          {message.type === MessageType.User ? (
            <User chatBot={chatBot} content={message.message} />
          ) : (
            <Bot content={message.message} first={index == 0} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Body;
