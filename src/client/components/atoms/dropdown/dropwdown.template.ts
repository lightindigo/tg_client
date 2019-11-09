import './styles.css';

const options = (data: DropdownOptionProps) => `
<div class="simple-dropdown-option">
    ${data.text}
</div>
`

export default (data: DropdownProps) => `
<div class="simple-dropdown">
    <div class="simple-dropdown__current">
        <span>
        ${data?.options ? data.options[0].text : ''}
        </span>
        <div class="simple-dropdown__tick">v</div>
    </div>
    <div class="simple-dropdown__options">
        ${data?.options ? data.options.reduce((prev, current) => {
    return `${prev}${options(current)}`
}, '') : ''}
    </div>
</div>
`;


type DropdownOptionProps = {
    text: string,
    value: any
}

type DropdownProps = {
    options: DropdownOptionProps[]
}