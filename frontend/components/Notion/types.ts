export type TextProps = {
    href: null,
    plain_text: string,
    type: string,
    text: {
        content: string,
        link: {
            url: string,
        } | null,
    },
    annotations: {
        bold: boolean,
        code: boolean,
        color: string,
        italic: boolean,
        strikethrough: boolean,
        underline: boolean,
    }
}[];