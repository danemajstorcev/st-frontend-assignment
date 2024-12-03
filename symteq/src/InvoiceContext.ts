import {createContext} from 'react';

type InvoiceType = {
  value: string;
  setValue: (value: string) => void;
}

export const InvoiceContext = createContext<InvoiceType | any>("");