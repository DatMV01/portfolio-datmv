import {
  Footer,
  Header,
  AboutSection,
  ProjectSection,
  ContactSection,
} from "@/components";
import { Fragment } from "react/jsx-runtime";

export default function Main() {
  return (
    <Fragment>
      <Header />
      <main>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </Fragment>
  );
}
