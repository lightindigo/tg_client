export abstract class UIComponent {
    public static attrsToString(attrs: { [key: string]: string }) {
        return Object.entries(attrs).reduce((prevValue, attr) => {
            return `${prevValue} ${attr[0]}="${attr[1]}"`;
        }, '')
    }
    public static render(_data: any): string {
        throw new Error('Not implemented');
    }
}