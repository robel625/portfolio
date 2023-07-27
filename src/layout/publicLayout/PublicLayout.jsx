import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import ParticlesBackground from "../../components/particlesBackground/ParticlesBackground";

const PublicLayout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
