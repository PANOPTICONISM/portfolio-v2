import { PropertiesProps } from "pages/types";

export type PostProps = {
    id: string,
    icon: {
        file: {
            url: string,
        },
        emoji: string,
        type: string,
    }
    properties: PropertiesProps
}[];

export type ColorsProps = {
    [key: string]: string,
}