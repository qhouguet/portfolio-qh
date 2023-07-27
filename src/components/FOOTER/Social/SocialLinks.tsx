type Props = {
	NAME: string;
	URL: string;
};

export const SocialLinks = ({ NAME, URL }: Props) => {
	return (
		<a className="pt-2" href={URL}>
			{NAME}
		</a>
	);
};
