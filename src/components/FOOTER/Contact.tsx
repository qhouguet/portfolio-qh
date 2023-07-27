import { useDataContext } from 'src/context/data';

export const Contact = () => {
	const [t] = useDataContext();

	const CONTACTTITLE = t('FOOTER.CONTACT.TITLE');

	const CONTACTDESCRIPTION = ['1', '2', '3'].map((description) =>
		t(`FOOTER.CONTACT.DESCRIPTION.${description}`)
	);

	return (
		<div className="w-5/6 py-16">
			<h3 className="font-bold uppercase">{CONTACTTITLE}</h3>
			<p className="pt-2 text-xl text-myGreen-dark">
				{CONTACTDESCRIPTION[0]}
				<br />
				<span className="font-semibold text-myBlack-dark">{CONTACTDESCRIPTION[1]}</span>
				<a href={`mailto:${CONTACTDESCRIPTION[2]}`} className="underline">
					{CONTACTDESCRIPTION[2]}
				</a>
			</p>
		</div>
	);
};
