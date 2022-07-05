import type { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import {
  Header,
  Socials,
  Footer,
  ProjectsCTA,
  LoadingScreen,
  Packages,
} from "../components";
import {
  Introduction,
  Steps,
  Tech,
  Recent,
  Posts,
} from "../components/homepage";
import Modal from "../components/Modal/Modal";

interface PageProps {
  pri: any;
  skills: any;
  experience: any;
  packages: any;
}

const Home: NextPage<PageProps> = ({ pri, skills, experience, packages }) => {
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

  const submitFormRef = useRef<any>(null);
  function handleScrollingToForm() {
    submitFormRef?.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
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
            <Tech skills={skills?.skills?.items} />
            <Recent
              post={pri?.projects?.items[0]}
              handleBackClick={handleBackClick}
            />
            <Packages
              handleScrollingToForm={handleScrollingToForm}
              packages={packages?.packages?.items}
            />
            <Posts ref={projectsRef} projects={pri?.projects?.items} />
          </main>
          <Footer ref={submitFormRef} />
          <Modal />
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  const pri = await fetch(`${baseUrl}/api/projects`).then((res) => res.json());
  const skills = await fetch(`${baseUrl}/api/skills`).then((res) => res.json());
  const experience = await fetch(`${baseUrl}/api/experience`).then((res) =>
    res.json()
  );
  const packages = await fetch(`${baseUrl}/api/packages`).then((res) =>
    res.json()
  );

  return {
    props: { pri, skills, experience, packages },
  };
};

export default Home;
