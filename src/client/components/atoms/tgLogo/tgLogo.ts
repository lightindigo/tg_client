import { UIComponent } from "../../UIComponent";
import templ from "./tgLogo.template";

export class TgLogo extends UIComponent {
    public static render(data = {}): string {
        return templ(data);
    }
}