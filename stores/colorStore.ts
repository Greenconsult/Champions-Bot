import { create } from 'zustand';

interface MyStore {
  value: string;
  updateValue: (newValue: string) => void;
}

const useColorStore = create<MyStore>((set) => ({
  value: '#ddd',
  updateValue: (newValue) => set({ value: newValue })
}));

export default useColorStore;
