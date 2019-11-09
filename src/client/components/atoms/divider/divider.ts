export class Divider {
    public static render(data?: any) {
        return `<div style="${data?.height ? `height: ${data.height}px` : 'height: 10px;'}"></div>`
    }
}