// import {
// 	useState,
// 	createContext,
// 	useContext,
// 	Dispatch,
// 	SetStateAction,
// 	PropsWithChildren
// } from 'react';

// type dataType = {};

// export const dataContext = createContext<Open>({} as Open);

// export const OpenContext = ({ children }: PropsWithChildren) => {
// 	const [open, setOpen] = useState(false);

// 	return <dataContext.Provider value={{ open, setOpen }}>{children}</dataContext.Provider>;
// };

// export const useOpenContext = () => useContext(dataContext);
