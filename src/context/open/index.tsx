import { useContext } from 'react';
import { Context } from './OpenContextProvider';

export const useOpenContext = () => useContext(Context);
