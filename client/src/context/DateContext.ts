import { createContext } from 'react';

interface IDateContext {
    date : Date
    setDate?(arg? : any) : any
}

const date = new Date();
export const DateContext = createContext<IDateContext>({date});
