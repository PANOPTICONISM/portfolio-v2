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
import { Introduction, Steps, Tech, Recent, Posts, Packages } from "./homepage";
import Experience from "./homepage/Experience/Experience";

function App() {
  const [projects, setProjects] = useState([]);
  const [packages, setPackages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const returnProject = await client.getEntries({
        content_type: "project",
      });
      const returnPackage = await client.getEntries({
        content_type: "package",
      });
      setProjects(returnProject.items);
      setPackages(returnPackage.items);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const projectsRef = useRef(null);

  function handleBackClick() {
    console.log(projectsRef);
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
            <Tech />
            <Recent post={projects} />
            <Experience />
            <Posts posts={projects} ref={projectsRef} />
            <Packages packages={packages} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
