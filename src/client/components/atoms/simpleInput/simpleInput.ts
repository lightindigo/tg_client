import { UIComponent } from "../../UIComponent";
import templ from './simpleInput.template';

export class SimpleInput extends UIComponent {
    public static render(data = {}) {
        return templ(data)
    }
}