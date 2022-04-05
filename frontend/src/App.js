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
import qs from "qs";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const query = qs.stringify(
        {
          sort: ["id:desc"],
        },
        {
          encodeValuesOnly: true,
        }
      );
      const res = await fetch(
        `${process.env.REACT_APP_STRAPI_URL_PROD}/api/skills?populate=*&${query}`
      );
      const skills = await res.json();
      const resProjects = await fetch(
        `${process.env.REACT_APP_STRAPI_URL_PROD}/api/projects?populate=*&${query}`
      );
      console.log(resProjects, "res");
      const projects = await resProjects.json();
      setProjects(projects.data);
      setSkills(skills.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(projects, "projects");

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
