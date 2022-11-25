export type ExperienceProps = {
    jobs: {
        fields: {
            id: number,
            company: string,
            jobTitle: string,
            description: string,
        },
        sys: {
            id: string,
        }
    }[]
};