import { useContext } from 'react';
import { Context } from './DataContextProvider';

export const useDataContext = () => useContext(Context);
