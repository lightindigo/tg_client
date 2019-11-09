// import pug from 'pug';
import { template } from './simpleButton.template';
import { SimpleButton } from './simpleButton';

export default {
    title: 'Simple button',
};

export const simpleButton = () => {
    return `
    <div>
    ${SimpleButton.render({text: 'subscribe'})}
    </div>
    <div>
    ${SimpleButton.render({text: 'large subscribe', width: '100%'})}
    </div>
    `;
}
