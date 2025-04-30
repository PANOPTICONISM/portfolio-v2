export type TechProps = {
    skills: TechItemsProps,
};

export type TechItemsProps = {
    items: {
        fields: SkillProps,
        metadata: {
            tags: {
                sys: {
                    id: string,
                    type: string,
                    linkType: string,
                }
            }[]
        }
    }[]
}

export type SkillProps = {
      id: number;
      title: string;
      icon: {
        fields: {
          description: string;
          title: string;
          file: {
            url: string;
          };
        };
      };
  };