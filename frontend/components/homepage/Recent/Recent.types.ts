import { ArticleFieldsProps } from "../Posts/Posts.types";

export type RecentProps = {
    post: ArticleFieldsProps,
    handleBackClick: () => void,
}