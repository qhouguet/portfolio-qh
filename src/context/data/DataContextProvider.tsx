import { useState, createContext, PropsWithChildren, useCallback } from 'react';
import contentFR from '../../data/fr/content.json';
import contentEN from '../../data/en/content.json';
import { at } from 'lodash';
import { LanguageEnum } from 'src/models/enum/Language';

// Ici on vient gérer toute la logique de changement de langue +
// la récupération des données avec lodash

// Dans notre context, on récupère une fonction t qui va "translate" le path qu'on lui envoie
// et renvoyer un array avec le contenu de notre JSON data.
// On récupère aussi une fonction changeLanguage qui nous permettra de changer la langue du folio
type DataContext = [(path: string) => string, (l: LanguageEnum) => void];

// On va utiliser un switch / case sur notre enum pour gérer les langues du folio
export const DataContextProvider = ({ children }: PropsWithChildren) => {
	const [language, setLanguage] = useState(LanguageEnum.FR);

	const t = useCallback(
		(path: string) => {
			switch (language) {
				case LanguageEnum.EN:
					return at(contentEN, path)[0].toString();
				case LanguageEnum.FR:
					return at(contentFR, path)[0].toString();
				default:
					console.error('Unhandled...');
					return '';
			}
		},
		[language]
	);

	const changeLanguage = (l: LanguageEnum) => setLanguage(l);

	return <Context.Provider value={[t, changeLanguage]}>{children}</Context.Provider>;
};

export const Context = createContext<DataContext>([() => '', () => {}]);
