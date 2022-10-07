import type { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import {
  Header,
  Socials,
  Footer,
  ProjectsCTA,
  LoadingScreen,
} from "../components";
import {
  Introduction,
  Steps,
  Tech,
  Recent,
  Posts,
} from "../components/homepage";
import Experience from "../components/homepage/Experience/Experience";
import Modal from "../components/Modal/Modal";
import { useThemeContext } from "../contexts/theme-context";

interface PageProps {
  pri: any;
  skills: any;
  experience: any;
}

const Home: NextPage<PageProps> = ({ pri, skills, experience }) => {
  const [isLoading, setLoading] = useState(true);
  const {theme, setTheme} = useThemeContext();
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  useEffect(() => {
    if (pri.success && skills.success && experience.success === true) {
      setLoading(false);
    }
  }, [experience, pri, skills]);

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
          <Socials />
          <ProjectsCTA onClick={handleBackClick} />
          <main>
            <Introduction />
            <Steps />
            <Tech skills={skills.skills.items} />
            <Recent
              post={pri.projects.items[0]}
              handleBackClick={handleBackClick}
            />
            <Experience jobs={experience.jobs.items} />
            <Posts ref={projectsRef} projects={pri.projects.items} />
          </main>
          <Footer />
          {/* <Modal /> */}
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  console.log(protocol, baseUrl);
  const pri = await fetch(`${baseUrl}/api/projects`).then((res) => res.json());
  const skills = await fetch(`${baseUrl}/api/skills`).then((res) => res.json());
  const experience = await fetch(`${baseUrl}/api/experience`).then((res) =>
    res.json()
  );

  return {
    props: { pri, skills, experience },
  };
};

export default Home;
