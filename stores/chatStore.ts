//Store
import { ILangchainAppStore } from './index';
import { IChat, ILastQuery, MessageType } from '../models/Types';
import { v4 as uuidv4 } from 'uuid';

export interface IChatStore {
  chat: IChat[];
  updateChat: (singleChat: IChat) => void;
  updateLastChat: (updatedChat: IChat) => void;

  lastQuery: ILastQuery;
  updateLastQuery: (lastQuery: ILastQuery) => void;
}

export const chatStore = (set: any, get: any): IChatStore => ({
  chat: [
    {
      id: uuidv4(),
      message:
        'Hi there, how can I help you today?  My name is Hosanna, the official chatbot for HCC Church Worldwide and Amos Fenwa Ministries. I can tell you about our church services, branches, history, Amos Fenwa Ministries and lots more. Praise God, Lets Chat!',
      type: MessageType.Bot
    }
  ],
  lastQuery: { message: '', done: false },
  updateLastQuery: async (lastQuery: ILastQuery) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      chatStore: { ...state.chatStore, lastQuery: lastQuery }
    }));
  },
  updateChat: (singleChat: IChat) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      chatStore: {
        ...state.chatStore,
        chat: [...state.chatStore.chat, singleChat]
      }
    }));
  },
  updateLastChat: (updatedChat: IChat) => {
    set((state: ILangchainAppStore) => {
      const chatLength = state.chatStore.chat.length;
      if (chatLength === 0) {
        return state;
      }
      const updatedChatArray = [...state.chatStore.chat];
      updatedChatArray[chatLength - 1] = updatedChat;
      return {
        ...state,
        chatStore: {
          ...state.chatStore,
          chat: updatedChatArray
        }
      };
    });
  }
});
