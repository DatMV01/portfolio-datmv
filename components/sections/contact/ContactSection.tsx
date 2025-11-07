import { Container, TextLogo } from "@/components";
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";
import ContactItem from "./ContactItem";
import SendMessageForm from "./SendMessageForm";

const contacts = [
  {
    label: "datmv01@gmail.com",
    icon: FiMail,
    href: "mailto:datmv01@gmail.com",
  },
  {
    label: "Dat Mai",
    icon: FiLinkedin,
    href: "https://linkedin.com",
  },
  {
    label: "Dat Mai",
    icon: FiFacebook,
    href: "https://facebook.com",
  },
  {
    label: "Github",
    icon: FiGithub,
    href: "https://github.com/DatMV01",
  },
  {
    label: "+84 818 012 377",
    icon: FiPhoneCall,
  },
  {
    label: "Ho Chi Minh City",
    icon: FiMapPin,
  },
];

const ContactSection = () => {
  return (
    <Container
      as="section"
      className="min-h-screen mt-8 flex flex-col gap-4 items-center"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl">Get in touch 👋</h2>
      <p className="px-6 text-center leading-6 md:px-40">
        I&apos;d love to hear from you! Whether you have a project in mind, a
        question, or just want to say hi — feel free to reach out.
      </p>

      <TextLogo />

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
        {contacts.map((item, i) => (
          <ContactItem key={i} {...item} />
        ))}
      </div>

      <SendMessageForm />
    </Container>
  );
};

export default ContactSection;
