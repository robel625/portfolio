import React from "react";
import HomeBanner from "../../components/home/homeBanner/HomeBanner";
import Skills from "../../components/home/skills/Skills";
import RecentProjects from "../../components/home/recentProjects/RecentProjects";
import About from "../../components/home/about/About";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <About />
      <Skills />
      <RecentProjects />
    </>
  );
};

export default HomePage;
