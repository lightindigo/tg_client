import { SimpleButton } from "../../components/atoms/simpleButton/simpleButton";
import { PhoneForm } from "../../components/organisms/phoneForm/phoneForm";

export class LoginScreen {
    render() {
        return `
<div>
     <h1>Hello</h1>
     ${PhoneForm.render()}
</div>
        `;
    }
}