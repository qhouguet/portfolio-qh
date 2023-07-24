import { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import { MenuButton } from './MenuButton';
import { useState } from 'react';

type Props = PropsWithChildren<{
	title: string;
	categories: string[];
}>;

export const Header = ({ title, categories }: Props) => {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<header className="absolute z-20 flex h-screen w-screen flex-col items-center">
			<h2
				className={`z-50 w-full py-8 text-center text-2xl font-extrabold uppercase italic text-myGreen-dark ${
					open ? '' : 'fixed'
				}`}
			>
				{title}
			</h2>
			<Navbar open={open} categories={categories} />
			<MenuButton open={open} handleClick={handleClick} />
		</header>
	);
};
