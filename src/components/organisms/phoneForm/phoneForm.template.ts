import { SimpleButton } from "../../atoms/simpleButton/simpleButton";

export default (data: any) => {
    return `
<div class="phone-form">
    <select>
        <option>+8 Russia</option>
    </select>
    <input type="text">
    ${SimpleButton.render({ text: 'Далее' })}
</div>
`;
};