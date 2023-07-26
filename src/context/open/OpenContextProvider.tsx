import { useState, createContext, PropsWithChildren } from 'react';

type Open = {
	open: boolean;
	handleOpen: () => void;
};

export const Context = createContext<Open>({} as Open);

export const OpenContextProvider = ({ children }: PropsWithChildren) => {
	const handleOpen = () => {
		setOpen(!open);
	};
	const [open, setOpen] = useState(false);

	return <Context.Provider value={{ open, handleOpen }}>{children}</Context.Provider>;
};
