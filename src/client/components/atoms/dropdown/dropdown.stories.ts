import { Dropdown } from "./dropdown";
import { Divider } from "../divider/divider";

export default {
    title: 'Dropdown'
}

export const simple = () => /*html*/`
<div style="width: 300px">
${Dropdown.render({
    options: [{
        text: 'Text 1',
        value: 'val 1'
    }]
})}
</div>
${Divider.render()}
<div>
${Dropdown.render({
    options: [{
        text: 'Text 1',
        value: 'val 1'
    }]
})}
</div>
`;
