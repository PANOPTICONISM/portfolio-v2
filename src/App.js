import React, { useState, useEffect } from "react";
import "./App.css";
import "./script.js";
import { client } from "./lib/Contentful";
import { Header, Socials, Footer, Projects, LoadingScreen } from "./components";
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

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Socials />
          <Projects />
          <main>
            <Introduction />
            <Steps />
            <Tech />
            <Recent post={projects} />
            <Experience />
            <Posts posts={projects} />
            <Packages packages={packages} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
