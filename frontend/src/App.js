import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  Header,
  Socials,
  Footer,
  ProjectsCTA,
  LoadingScreen,
} from "./components";
import { Introduction, Steps, Tech, Recent, Posts } from "./homepage";
import Experience from "./homepage/Experience/Experience";
import { client } from "./lib/Contentful";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
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

  const projectsRef = useRef(null);
  function handleBackClick() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
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
            <Posts posts={projects} ref={projectsRef} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
