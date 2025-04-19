import type { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import {
  Header,
  Socials,
  Footer,
  ProjectsCTA,
  LoadingScreen,
} from "components";
import {
  Introduction,
  Steps,
  Recent,
  Posts,
  TechTabs,
} from "components/homepage";
import { useThemeContext } from "contexts/theme-context";
import { FetchDataProps } from "types/App.types";
import { client } from "./api/lib/Contentful";
import { ThemeSwitch } from "components/ThemeSwitch/ThemeSwitch";
import { notionClient } from "./api/lib/Notion";

const Home: NextPage<FetchDataProps> = ({
  projects,
  skills,
  frontpageBlocks,
}) => {
  const [isLoading, setLoading] = useState(true);
  const { theme } = useThemeContext();

  useEffect(() => {
    if (projects && skills) {
      setLoading(false);
    }
  }, [skills, projects]);

  const projectsRef = useRef<any>(null);
  function handleBackClick() {
    projectsRef?.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`common theme-${theme}`}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main>
            <Socials />
            <Introduction blocks={frontpageBlocks} />
            <Steps />
            <Recent
              post={projects.items[0]}
              handleBackClick={handleBackClick}
            />
            <TechTabs skills={skills} />
            <Posts ref={projectsRef} projects={projects.items} />
            <ProjectsCTA onClick={handleBackClick} />
          </main>
          <Footer />
          <ThemeSwitch />
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const pageId = process.env.NOTION_FRONTPAGE_ID || "";

  const blocks = await notionClient.blocks.children.list({
    block_id: pageId,
  });

  const projects = await client.getEntries({
    content_type: "project",
    order: "fields.id",
  });
  const skills = await client.getEntries({
    content_type: "toolshed",
    order: "fields.id",
  });

  return {
    props: { projects, skills, frontpageBlocks: blocks.results },
  };
};

export default Home;
