import "./styles.css"

export default (data) => `
<div class="tg-logo" style="${data?.size ? `height: ${data.size}px;width:${data.size}px;` : 'height: 50px;width:50px;'}"></div>
`