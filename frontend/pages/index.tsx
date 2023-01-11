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

const Home: NextPage<FetchDataProps> = ({ pri, skills, experience }) => {
  const [isLoading, setLoading] = useState(true);
  const { theme } = useThemeContext();

  useEffect(() => {
    if (pri.success && skills.success && experience.success === true) {
      setLoading(false);
    }
  }, [experience, skills, pri]);

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
            <TabSkills skills={skills.skills} />
            <Recent
              post={pri.projects.items[0]}
              handleBackClick={handleBackClick}
            />
            <Experience jobs={experience.jobs.items} />
            <Posts ref={projectsRef} projects={pri.projects.items} />
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
  const pri = await fetch(`${process.env.VERCEL_URL}/api/projects`).then((res) => res.json());
  const skills = await fetch(`${process.env.VERCEL_URL}/api/skills`).then((res) => res.json());
  const experience = await fetch(`${process.env.VERCEL_URL}/api/experience`).then((res) => res.json());

  return {
    props: { pri, skills, experience },
  };
};

export default Home;
