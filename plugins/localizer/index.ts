import * as Localization from 'expo-localization';
import enUS from '../../locales/en-us/locale.json';
import nlNL from '../../locales/nl-nl/locale.json';
import ptPT from '../../locales/pt-pt/locale.json';

type JSONValue = {
  [x: string]: string;
};

export function useLocale() {
  return (copyId: string) => {
    const locale = Localization.locale;

    let selectedLocaleContent: JSONValue = {};
    switch (locale) {
      case 'en-GB':
        selectedLocaleContent = enUS;
        break;
      case 'nl-NL':
        selectedLocaleContent = nlNL;
        break;
      case 'pt-PT':
        selectedLocaleContent = ptPT;
        break;

      default:
        break;
    }

    return selectedLocaleContent[copyId];
  };
}
