export type TechProps = {
    skills: TechItemsProps,
};

export type TechItemsProps = {
    items: {
        fields: {
            id: number,
            title: string,
            image: {
                fields: {
                    description: string,
                    title: string,
                    file: {
                        url: string,
                    }
                }
            }
        },
        metadata: {
            tags: {
                sys: {
                    id: string,
                    type: string,
                    linkType: string,
                }
            }[]
        }
    }[]
}