import { LanguageEnum } from './Language';

// On utilise la fonctionnalité des computed property names
// pour avoir un object avec les mêmes clés que notre enum qui utilise
// un modèle du type key(value) = value(value)
// On utilise des svg plutôt que des emojis car ces derniers sont mal supportés sur certains windows

export const countryFlag = {
	[LanguageEnum.EN]: '/images/us.svg',
	[LanguageEnum.FR]: '/images/fr.svg'
};
