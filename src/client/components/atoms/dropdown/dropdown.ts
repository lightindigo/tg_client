import templ from './dropwdown.template';

export class Dropdown {
    public static render(data = {}) {
        return templ(data);
    }
}