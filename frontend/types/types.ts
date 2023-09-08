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

export type PropertiesProps = {
    Name: {
        title: {
            plain_text: string,
        }[],
    },
    Summary: {
        rich_text: {
            plain_text: string,
        }[]
    },
    Tags: {
        multi_select: {
            id: string,
            name: string,
            color: string,
        }[]
    },
    Preview: {
        url: string,
    },
    Date: {
        date: {
            start: string
        }
    }
}

export type SinglePostProps = {
    page: { properties: PropertiesProps },
    blocks: {
        results: {
            id: string,
        }[],
    },
}