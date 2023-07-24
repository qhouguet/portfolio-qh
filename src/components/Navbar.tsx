type Props = {
	categories: string[];
	open: boolean;
};

export const Navbar = ({ categories, open }: Props) => {
	console.log(open);
	return (
		<nav
			className={`fixed top-0 z-40 h-full w-full flex-col items-center justify-center bg-myGreen-neutral ${
				open ? 'hidden' : 'flex'
			}`}
		>
			<ul className="text-center">
				{categories.map((category) => (
					<li
						key={category}
						className="my-16 cursor-pointer text-4xl font-extrabold uppercase text-myBlack-dark"
					>
						{category}
					</li>
				))}
			</ul>
		</nav>
	);
};
