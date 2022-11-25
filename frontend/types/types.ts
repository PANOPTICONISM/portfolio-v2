import { ExperienceFieldsProps, ExperienceProps } from "components/homepage/Experience/types";
import { ArticleFieldsProps } from "components/homepage/Posts/types";
import { TechItemsProps } from "components/homepage/Skills/types";

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