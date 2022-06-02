import type { NextPage } from "next";
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
import { client } from "../lib/Contentful";

const Home: NextPage = () => {
  const [projects, setProjects] = useState<any>([]);
  const [skills, setSkills] = useState<any>([]);
  const [experience, setExperience] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const returnProject = await client.getEntries({
        content_type: "project",
        order: "fields.id",
      });
      const returnSkills = await client.getEntries({
        content_type: "skills",
        order: "fields.id",
      });
      const returnExperience = await client.getEntries({
        content_type: "experience",
        order: "fields.id",
      });
      setProjects(returnProject.items);
      setSkills(returnSkills.items);
      setExperience(returnExperience.items);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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
          <Header />
          <Socials />
          <ProjectsCTA onClick={handleBackClick} />
          <main>
            <Introduction />
            <Steps />
            <Tech skills={skills} />
            <Recent post={projects} handleBackClick={handleBackClick} />
            <Experience jobs={experience} />
            <Posts ref={projectsRef} projects={projects} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
