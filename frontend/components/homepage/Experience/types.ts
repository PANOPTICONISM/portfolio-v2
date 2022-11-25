export type ExperienceProps = {
    jobs: ExperienceFieldsProps[],
};

export type ExperienceFieldsProps = {
    fields: {
        id: number,
        company: string,
        jobTitle: string,
        description: string,
    },
    sys: {
        id: string,
    }
};