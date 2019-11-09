import { PhoneForm } from "./phoneForm";

// import pug from 'pug';

export default {
    title: 'Phone form',
};

export const simpleButton = () => {
    return `
    <div>
    ${PhoneForm.render()}
    </div>
    `;
}
