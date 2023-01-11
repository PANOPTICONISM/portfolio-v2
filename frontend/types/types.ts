import { PostProps } from "components/Entries/Entries";
import { ExperienceFieldsProps } from "components/homepage/Experience/types";
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
    posts: PostProps,
    success: boolean,
}

export type SinglePostProps = {
    page: PageProps,
    blocks: {
        results: {
            id: string,
        }[],
    },
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