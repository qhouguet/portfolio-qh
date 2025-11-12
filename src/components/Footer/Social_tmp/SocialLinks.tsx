type Props = {
	NAME: string;
	URL: string;
};

export const SocialLinks = ({ NAME, URL }: Props) => {
	return (
		<a className="hover:text-my-orange-neutral pt-2" href={URL}>
			{NAME}
		</a>
	);
};
