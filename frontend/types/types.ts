import { ExperienceFieldsProps, ExperienceProps } from "components/homepage/Experience/types";
import { ArticleFieldsProps } from "components/homepage/Posts/types";
import { TechItemsProps } from "components/homepage/Skills/types";
import { TextProps } from "components/Notion/types";

export type FetchDataProps = {
    pri: {
        message: string,
        projects: {
            items: ArticleFieldsProps[],
        },
        success: boolean,

    },
    skills: {
        message: string,
        skills: TechItemsProps,
        success: boolean,
    },
    experience: {
        message: string,
        jobs: {
            items: ExperienceFieldsProps[],
        },
        success: boolean,
    },
};

export type BlogDataProps = {
    entries: {
        message: string,
        success: boolean,
        posts: {
            results: {
                id: string,
                properties: {
                    Name: {
                        title: TextProps,
                    }
                },
            }[],
        },
    },
}

export type PostProps = {
    page: PageProps,
    blocks: BlocksProps,
}

type BlocksProps = {
    blocks: {
        id: string,
    }[],
    message: string,
    success: boolean,
}

type PageProps = {
    page: {
        properties: {
            Name: {
                title: TextProps,
            }
        },
    },
    message: string,
    success: boolean,
}