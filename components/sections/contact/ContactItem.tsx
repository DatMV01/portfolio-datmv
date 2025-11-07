import Link from "next/link";
import { IconType } from "react-icons";

interface ContactItemProps {
  label: string;
  icon: IconType;
  href?: string;
}

const ContactItem = ({ icon: Icon, label, href }: ContactItemProps) => {
  const content = (
    <div className="flex w-full items-center gap-2 py-2">
      <span className="flex basis-1/3 justify-end">
        <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
      </span>
      <span className="basis-2/3">{label}</span>
    </div>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex"
    >
      {content}
    </Link>
  ) : (
    <div className="group flex">{content}</div>
  );
};

export default ContactItem;
