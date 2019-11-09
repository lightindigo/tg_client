import templ from './phoneForm.template';

export class PhoneForm {
    constructor(parameters) {
        
    }

    public static render(data = {}){
        return templ(data);
    }
}