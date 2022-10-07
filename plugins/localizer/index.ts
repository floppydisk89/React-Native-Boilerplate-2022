import * as Localization from 'expo-localization';
import enUS from '../../locales/en-us';
import nlNL from '../../locales/nl-nl';
import ptPT from '../../locales/pt-pt';

type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

export function useLocale() {
  return (copy: string): string => {
    const locale = Localization.locale;
    console.log(locale);
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

    return selectedLocaleContent[copy];
  };
}
