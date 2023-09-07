import { PostProps } from "components/Entries/Entries";
import { ExperienceFieldsProps } from "components/homepage/Experience/types";
import { ArticleFieldsProps } from "components/homepage/Posts/types";
import { TechItemsProps } from "components/homepage/Skills/types";
import { TextProps } from "components/Notion/types";

export type FetchDataProps = {
    projects: {
        items: ArticleFieldsProps[],
    },
    skills: TechItemsProps,
    experience: {
        items: ExperienceFieldsProps[],
    },
};

export type BlogDataProps = {
    posts: PostProps,
}

export type SinglePostProps = {
    page: {
        properties: {
            Name: {
                title: TextProps,
            },
            Preview: {
                url: string,
            },
            Date: {
                date: {
                    start: string
                }
            }
        },
    },
    blocks: {
        results: {
            id: string,
        }[],
    },
}