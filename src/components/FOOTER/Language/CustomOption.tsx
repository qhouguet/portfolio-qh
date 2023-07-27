import { countryFlag } from 'src/models/enum/CountryFlag';
import { LanguageEnum } from 'src/models/enum/Language';

type Props = {
	selectedLang: LanguageEnum;
	language: string;
	handleLanguageSelection: (language: LanguageEnum) => void;
};

export const CustomOption = ({ selectedLang, language, handleLanguageSelection }: Props) => {
	return (
		<div
			className={`${selectedLang === language ? 'hidden' : ''}`}
			onClick={() => handleLanguageSelection(language as LanguageEnum)}
		>
			<span className="pt-px">{countryFlag[language as LanguageEnum]}</span>
			<span className="px-2">{language}</span>
		</div>
	);
};
