import "./styles.css";

export default (data: any) => `
<button class="simple-button" style="${data?.width ? `width: ${data.width};` : ''}">
    <div class="simple-button__text">${data?.text ?? 'Button text'}</div>
    <div class="ripple-effect"></div>
</button>
`