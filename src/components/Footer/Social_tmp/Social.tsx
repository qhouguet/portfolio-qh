import { SocialLinks } from './SocialLinks';
import { useDataContext } from 'src/context/data';

export const Social = () => {
	const [t] = useDataContext();

	const TITLE = t('FOOTER.SOCIAL.TITLE');

	const LINKS = ['LINKEDIN', 'GITHUB', 'TWITTER'].map((link) => ({
		NAME: t(`FOOTER.SOCIAL.LINKS.${link}.NAME`),
		URL: t(`FOOTER.SOCIAL.LINKS.${link}.URL`)
	}));

	return (
		<div className="pt-16 lg:pt-0">
			<h3 className="font-bold uppercase">{TITLE}</h3>
			<div className="text-my-green-dark flex flex-col text-xl">
				{LINKS.map((link) => (
					<SocialLinks NAME={link.NAME} URL={link.URL} key={link.NAME} />
				))}
			</div>
		</div>
	);
};
