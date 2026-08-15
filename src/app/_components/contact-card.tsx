import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export type ContactCardProps = {
  title: string;
  url: string;
  icon: ReactNode;
};
const ContactCard = ({ props }: { props: ContactCardProps }) => {
  return (
    <Button variant={"secondary"}>
      <Link
        href={props.url}
        className="flex items-center justify-between gap-2"
        target="_blank"
      >
        {props.icon}
        {props.title}
      </Link>
    </Button>
  );
};

export default ContactCard;
