import {
	useState,
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	PropsWithChildren
} from 'react';

type Open = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<Open>({} as Open);

export const OpenContext = ({ children }: PropsWithChildren) => {
	const [open, setOpen] = useState(false);

	return <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>;
};

export const useOpenContext = () => useContext(Context);
