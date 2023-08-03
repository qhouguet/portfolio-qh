type Props = {
	NAME: string;
	URL: string;
};

export const SocialLinks = ({ NAME, URL }: Props) => {
	return (
		<a className="pt-2 hover:text-myOrange-neutral" href={URL}>
			{NAME}
		</a>
	);
};
