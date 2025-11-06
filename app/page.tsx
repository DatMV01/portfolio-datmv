import {
  Footer,
  Header,
  AboutSection,
  ProjectSection,
  ContactSection,
  ScrollSpyNav,
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

      <ScrollSpyNav offset={70}/>
    </Fragment>
  );
}
