import { SimpleButton } from "../../components/atoms/simpleButton/simpleButton";

export class LoginScreen {
    render(){
        return `
<div>
     <h1>Hello</h1>
     ${(new SimpleButton).render()}
</div>
        `;
    }
}