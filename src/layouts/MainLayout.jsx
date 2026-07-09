import ParticleCanvas from "../components/ParticleCanvas";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <ParticleCanvas />
      <NavBar />

      {children}

      <Footer />
    </>
  );
}