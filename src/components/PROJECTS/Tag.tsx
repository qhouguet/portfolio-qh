type Props = {
	TAG: string;
};

export const Tag = ({ TAG }: Props) => {
	return (
		<li className="mx-2 rounded-3xl bg-myOrange-neutral px-4 py-1 text-xs font-semibold uppercase">
			{TAG}
		</li>
	);
};
