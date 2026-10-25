import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LinkCardProps = {
  href: string;
  title: string;
  description?: string;
  image?: string;
  icon?: LucideIcon;
  className?: string;
};

const LinkCard = ({
  href,
  title,
  description,
  image,
  icon: Icon,
  className,
}: LinkCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group/link-card rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <Card className="h-full pt-0 shadow-sm transition-shadow group-hover/link-card:shadow-xl">
        <div className="flex aspect-square w-full items-center justify-center bg-muted/50">
          {image ? (
            <Image
              src={image}
              alt={title}
              width={1080}
              height={1080}
              className="object-contain"
            />
          ) : (
            Icon && <Icon className="size-12 text-muted-foreground" />
          )}
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      </Card>
    </Link>
  );
};

export { LinkCard };
