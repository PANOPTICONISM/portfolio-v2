export type ArticleFieldsProps = {
    fields: {
        title: string;
        description?: string;
        image: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
        category: Array<string>;
        behance?: string;
        github?: string;
        livePreview?: string;
        languages: Array<string>;
    };
}

export type ArticleProps = {
    article: ArticleFieldsProps,
};