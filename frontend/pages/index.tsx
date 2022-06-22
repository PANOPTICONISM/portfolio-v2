import type { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import { Socials, Footer, ProjectsCTA, LoadingScreen } from "../components";
import {
  Introduction,
  Steps,
  Tech,
  Recent,
  Posts,
} from "../components/homepage";
import Experience from "../components/homepage/Experience/Experience";
import Modal from "../components/Modal/Modal";

interface PageProps {
  pri: any;
  skills: any;
  experience: any;
}

const Home: NextPage<PageProps> = ({ pri, skills, experience }) => {
  const [isLoading, setLoading] = useState(true);

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
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
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
          <Modal />
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const pri = await fetch("http://localhost:3000/api/projects").then((res) =>
    res.json()
  );
  const skills = await fetch("http://localhost:3000/api/skills").then((res) =>
    res.json()
  );
  const experience = await fetch("http://localhost:3000/api/experience").then(
    (res) => res.json()
  );

  return {
    props: { pri, skills, experience },
  };
};

export default Home;
