import { UIComponent } from "../../UIComponent";

export class Label extends UIComponent {
    public static render(data: any): string {
        return `
        <span>${data?.text ?? ''}</span>
        `
    }
}