import { PropertiesProps } from "types/App.types";

export type PostProps = {
    id: string,
    created_time: string,
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