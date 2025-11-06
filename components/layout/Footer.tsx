import { Container } from "@/components";

const Footer = () => {
  return (
    <Container as="footer" id="footer">
      <div className="border-border flex h-16 items-center justify-center border-t">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </Container>
  );
};

export default Footer;
