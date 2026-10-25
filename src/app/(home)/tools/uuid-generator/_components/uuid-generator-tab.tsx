"use client";

import { useState } from "react";
import { FingerprintIcon, RefreshCwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { InputField } from "@/components/shared/input-field";
import { RadioGroupField } from "@/components/shared/radio-group-field";
import { SelectField } from "@/components/shared/select-field";
import {
  generateUuid,
  isNamespacedVersion,
  uuidNamespaces,
  type UuidVersion,
} from "@/lib/uuid";

const versionOptions = [
  { value: "v1", label: "v1" },
  { value: "v3", label: "v3" },
  { value: "v4", label: "v4" },
  { value: "v5", label: "v5" },
  { value: "v6", label: "v6" },
  { value: "v7", label: "v7" },
];

const namespaceOptions = [
  { value: uuidNamespaces.dns, label: "DNS" },
  { value: uuidNamespaces.url, label: "URL" },
];

const UuidGeneratorTab = () => {
  const [uuidVersion, setUuidVersion] = useState<UuidVersion>("v4");
  const [name, setName] = useState("proarash.github.io");
  const [namespace, setNamespace] = useState(uuidNamespaces.dns);
  const [uuid, setUuid] = useState(() =>
    generateUuid(uuidVersion, name, namespace),
  );

  const handleVersionChange = (value: string) => {
    const nextVersion = value as UuidVersion;
    setUuidVersion(nextVersion);
    setUuid(generateUuid(nextVersion, name, namespace));
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setUuid(generateUuid(uuidVersion, value, namespace));
  };

  const handleNamespaceChange = (value: string) => {
    setNamespace(value);
    setUuid(generateUuid(uuidVersion, name, value));
  };

  return (
    <div className="flex flex-col gap-4">
      <RadioGroupField
        label="نسخه"
        options={versionOptions}
        value={uuidVersion}
        onValueChange={(value) => handleVersionChange(value as string)}
      />
      {isNamespacedVersion(uuidVersion) && (
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField
            label="نام"
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
            dir="ltr"
            groupClassName="h-10"
          />
          <SelectField
            label="فضای نام"
            options={namespaceOptions}
            value={namespace}
            onValueChange={(value) => handleNamespaceChange(value as string)}
            className="flex-col items-stretch gap-2"
            triggerClassName="h-10!"
          />
        </div>
      )}
      <InputField
        label="UUID"
        value={uuid}
        readOnly
        dir="ltr"
        className="text-center font-mono"
        groupClassName="h-10"
        startAddon={<FingerprintIcon />}
        endAddon={<CopyButton value={uuid} label="UUID" />}
      />
      <Button
        onClick={() => setUuid(generateUuid(uuidVersion, name, namespace))}
      >
        <RefreshCwIcon />
        تولید UUID
      </Button>
    </div>
  );
};

export { UuidGeneratorTab };
