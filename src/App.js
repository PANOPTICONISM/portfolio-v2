import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { client } from "./lib/Contentful";
import {
  Header,
  Socials,
  Footer,
  ProjectsCTA,
  LoadingScreen,
} from "./components";
import { Introduction, Steps, Tech, Recent, Posts } from "./homepage";
import Experience from "./homepage/Experience/Experience";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const returnProject = await client.getEntries({
        content_type: "project",
      });
      const returnSkills = await client.getEntries({
        content_type: "skills",
      });
      setProjects(returnProject.items);
      setSkills(returnSkills.items);
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
            <Experience />
            <Posts posts={projects} ref={projectsRef} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
