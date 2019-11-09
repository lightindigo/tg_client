import en_US from './localizations/en_US.json';

export class Localization {
    private static keys: { [key: string]: string } = {};

    public static _n = (key: string) => {
        if (!Object.keys(Localization.keys).length) {
            Localization.setLanguage('en_US');
        }

        if (Localization.keys[key]) {
            return Localization.keys[key];
        } else {
            return `${key}#undef`
        }
    }

    public static setLanguage(language = 'en_US') {
        this.loadKeys(language)
    }

    private static loadKeys(_language: string) {
        const keysDict = en_US;

        this.keys = keysDict;
        console.log(this.keys)
    }
}

export const _n = Localization._n