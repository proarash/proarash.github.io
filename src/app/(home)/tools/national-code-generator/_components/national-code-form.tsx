"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/shared/input-field";
import { CopyButton } from "@/components/shared/copy-button";

type NationalCodeFormProps = {
  label: string;
  buttonLabel: string;
  generate: () => string;
  icon: LucideIcon;
  buttonIcon: LucideIcon;
};

const NationalCodeForm = ({
  label,
  buttonLabel,
  generate,
  icon: Icon,
  buttonIcon: ButtonIcon,
}: NationalCodeFormProps) => {
  const [nationalCode, setNationalCode] = useState(generate);

  return (
    <div className="flex w-full flex-col gap-4">
      <InputField
        label={label}
        value={nationalCode}
        readOnly
        dir="ltr"
        placeholder="1234567890"
        className="text-center font-mono"
        groupClassName="h-10"
        startAddon={<Icon />}
        endAddon={<CopyButton value={nationalCode} label={label} />}
      />
      <Button onClick={() => setNationalCode(generate())}>
        <ButtonIcon />
        {buttonLabel}
      </Button>
    </div>
  );
};

export { NationalCodeForm };
