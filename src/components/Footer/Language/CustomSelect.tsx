import { countryFlag } from 'src/models/enum/CountryFlag';
import ARROW from 'src/assets/ARROW.svg';
import { LanguageEnum } from 'src/models/enum/Language';

type Props = {
	toggleMenu: () => void;
	selectedLang: LanguageEnum;
	open: boolean;
};

export const CustomSelect = ({ toggleMenu, selectedLang, open }: Props) => {
	return (
		<div
			className="text-my-green-dark flex w-1/2 cursor-pointer flex-row items-center pl-0.5 pt-2 text-xl"
			onClick={toggleMenu}
		>
			<img alt={`${selectedLang} flag`} src={countryFlag[selectedLang]} className="w-6 pt-px" />
			<span className="px-2">{selectedLang}</span>
			<img
				src={ARROW}
				alt="Chevron ouverture menu selection langue"
				className={`select-lang w-3 self-center pt-0.5 ${open ? 'select-lang-active' : ''}`}
			/>
		</div>
	);
};
