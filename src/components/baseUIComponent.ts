export class BaseUIComponent<Props?, State?>{
    private el: 
    // private state: State;
    // private container = void 0;
    // private children: BaseUIComponent[] = [];

    constructor(element: string, props, children?) {

    }

    render() {
        let el = document.createElement(this.el);
        el.properties = {
            ...el.properties,

        }
        return el;
    }
}