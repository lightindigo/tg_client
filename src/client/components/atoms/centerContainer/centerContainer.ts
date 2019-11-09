import { UIComponent } from "../../UIComponent";

export class CenterContainer extends UIComponent {
    public static render(data): string {
        return `
        <div style="text-align: center;">
            ${data?.children ? data.children : ''}
        </div>
        `;
    }
}