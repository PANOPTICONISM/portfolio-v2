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
        tools: {
            fields: {
                id: number;
                title: string;
                icon: {
                    fields: {
                        file: {
                            url: string;
                        };
                    };
                };
            }
        }[]
    };
}

export type ArticleProps = {
    article: ArticleFieldsProps,
};