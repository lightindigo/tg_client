export class InlineContainer {
    public static render(data?: any) {
        return `
<div style="display: inline-block;">
${data?.children ? data.children : ''}
</div>
        `;
    }
}