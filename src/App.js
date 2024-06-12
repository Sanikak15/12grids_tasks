import React from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import MapSection from "./components/MapSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="font-sans">
      <Container>
        <Header />
        <ContactForm />
      </Container>

      <MapSection />
      <Container>
        <InfoSection />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
