"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail01Icon,
  SentIcon,
  TelegramIcon,
} from "@hugeicons/core-free-icons";
import SectionContainer from "./section-container";
import ContactCard, { ContactCardProps } from "./contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "../../components/ui/alert";

const ContactContainer = () => {
  const contactArray: ContactCardProps[] = [
    {
      title: "Email",
      icon: (
        <HugeiconsIcon
          icon={Mail01Icon}
          strokeWidth={2}
          className="text-yellow-500 size-4"
        />
      ),
      url: "mailto:ghanbariarash1999@gmail.com",
    },
    {
      title: "Telegram",
      icon: (
        <HugeiconsIcon
          icon={TelegramIcon}
          strokeWidth={2}
          className="text-blue-500 size-4"
        />
      ),
      url: "https://t.me/ProArash",
    },
  ];
  return (
    <SectionContainer
      title="Stay in touch"
      id="contact"
      lastItem
      icon={Call02Icon}
    >
      <div className="md:w-1/3 w-full flex flex-col gap-5">
        <form className="flex flex-col gap-3 rounded-2xl">
          <Label>{"Fullname"}</Label>
          <Input placeholder="Enter your fullname" type="text" />
          <Label>{"Mobile"}</Label>
          <Input placeholder="+123456789" type="tel" />
          <Label>{"Description"}</Label>
          <Textarea
            placeholder="Need a bespoke E-commerce, Business, or Portfolio Web Application or ..."
            className={`min-h-37.5 max-h-100`}
          />
          <Button>
            <HugeiconsIcon icon={SentIcon} strokeWidth={2} className="size-4" />
            {"Send"}
          </Button>
        </form>
        <div className="flex flex-wrap gap-3">
          {contactArray.map((v, i) => (
            <ContactCard key={i} props={v} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactContainer;
