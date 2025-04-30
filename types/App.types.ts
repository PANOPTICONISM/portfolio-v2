import { PostProps } from "components/Entries/Entries.types";
import { ArticleFieldsProps } from "components/homepage/Posts/Posts.types";
import { TechItemsProps } from "components/homepage/Tech/Tech.types";

export type FrontPageBlocks = {
    type: string,
    code: {
        language: string,
        rich_text: {
            type: string,
            plain_text: string
        }[]
    }
};

export type FetchDataProps = {
    projects: {
        items: ArticleFieldsProps[],
    },
    skills: TechItemsProps,
    frontpageBlocks: FrontPageBlocks[]
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