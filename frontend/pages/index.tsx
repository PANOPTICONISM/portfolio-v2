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
  TabSkills,
} from "components/homepage";
import Experience from "components/homepage/Experience/Experience";
import { useThemeContext } from "contexts/theme-context";
import { FetchDataProps } from "types/types";
import { client } from "./api/lib/Contentful";

const Home: NextPage<FetchDataProps> = ({ projects, skills, experience }) => {
  const [isLoading, setLoading] = useState(true);
  const { theme } = useThemeContext();

  useEffect(() => {
    if (projects && skills && experience) {
      setLoading(false);
    }
  }, [experience, skills, projects]);

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
            <Introduction />
            <Steps />
            <TabSkills skills={skills} />
            <Recent
              post={projects.items[0]}
              handleBackClick={handleBackClick}
            />
            <Experience jobs={experience.items} />
            <Posts ref={projectsRef} projects={projects.items} />
            <ProjectsCTA onClick={handleBackClick} />
          </main>
          <Footer />
          {/* <Modal /> */}
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await client.getEntries({
    content_type: "project",
    order: "fields.id",
  });
  const skills = await client.getEntries({
    content_type: "toolshed",
    order: "fields.id",
  });
  const experience = await client.getEntries({
    content_type: "experience",
    order: "fields.id",
  });

  return {
    props: { projects, skills, experience },
  };
};

export default Home;
