export type HeadlineProps = {
    link: {
        url: string,
    } | null,
    plain_text: string,
};

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

export type CalloutProps = {
    icon: {
        emoji: string,
    },
    rich_text: {
        plain_text: string,
    }[]
}