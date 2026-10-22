import Image, { StaticImageData } from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export type ProjectCardProps = {
  url: string;
  title: string;
  image: string | StaticImageData;
};

const ProjectCard = ({ props }: { props: ProjectCardProps }) => {
  return (
    <div className="flex flex-col gap-3 shadow dark:shadow-accent rounded-xl p-5">
      <Image
        src={props.image}
        alt={props.title}
        width={0}
        height={0}
        className="object-cover w-62.5 h-62.5 rounded-xl"
      />
      <Link href={props.url} target="_blank">
        <Button className="w-full" variant={"default"}>
          <HugeiconsIcon icon={ArrowRight01Icon} />
          {props.title}
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
