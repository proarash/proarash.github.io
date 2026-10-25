"use client";

import { useState } from "react";
import { CircleCheckIcon, CircleXIcon, FingerprintIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertField } from "@/components/shared/alert-field";
import { CopyButton } from "@/components/shared/copy-button";
import { InputField } from "@/components/shared/input-field";
import { TextareaField } from "@/components/shared/textarea-field";
import {
  bytesToUuid,
  convertUuidVersion,
  generateUuid,
  getUuidVersion,
  parseBytes,
  uuidToBytes,
  validateUuid,
} from "@/lib/uuid";

const UuidConverterTab = () => {
  const [uuid, setUuid] = useState(() => generateUuid("v1"));
  const [bytes, setBytes] = useState("");

  const trimmedUuid = uuid.trim();
  const isValid = validateUuid(trimmedUuid);
  const uuidVersion = isValid ? getUuidVersion(trimmedUuid) : null;
  const uuidBytes = isValid ? JSON.stringify(uuidToBytes(trimmedUuid)) : "";
  const convertedUuid = isValid ? convertUuidVersion(trimmedUuid) : null;

  let stringified = "";
  let bytesError = "";

  if (bytes.trim()) {
    try {
      stringified = bytesToUuid(parseBytes(bytes));
    } catch {
      bytesError = "آرایه باید شامل ۱۶ عدد بین ۰ تا ۲۵۵ باشد";
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <InputField
        label="UUID"
        value={uuid}
        onChange={(event) => setUuid(event.target.value)}
        dir="ltr"
        className="font-mono"
        groupClassName="h-10"
        aria-invalid={!!trimmedUuid && !isValid}
        startAddon={<FingerprintIcon />}
      />
      {trimmedUuid && (
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={isValid ? "success" : "destructive"}>
            {isValid ? <CircleCheckIcon /> : <CircleXIcon />}
            {isValid ? "معتبر" : "نامعتبر"}
          </Badge>
          {uuidVersion !== null && (
            <Badge variant="outline">نسخه {uuidVersion}</Badge>
          )}
        </div>
      )}
      {uuidBytes && (
        <TextareaField
          label="آرایه بایت‌ها (parse)"
          value={uuidBytes}
          readOnly
          dir="ltr"
          className="font-mono break-all"
          labelAction={<CopyButton value={uuidBytes} label="آرایه بایت‌ها" />}
        />
      )}
      {convertedUuid && (
        <InputField
          label={uuidVersion === 1 ? "تبدیل به نسخه ۶" : "تبدیل به نسخه ۱"}
          value={convertedUuid}
          readOnly
          dir="ltr"
          className="font-mono"
          groupClassName="h-10"
          endAddon={
            <CopyButton value={convertedUuid} label="UUID تبدیل شده" />
          }
        />
      )}
      <Separator />
      <TextareaField
        label="تبدیل آرایه بایت‌ها به UUID (stringify)"
        value={bytes}
        onChange={(event) => setBytes(event.target.value)}
        placeholder="[16, 32, 48, ...]"
        dir="ltr"
        className="font-mono"
        aria-invalid={!!bytesError}
      />
      {bytesError && (
        <AlertField variant="destructive" description={bytesError} />
      )}
      {stringified && (
        <InputField
          label="UUID"
          value={stringified}
          readOnly
          dir="ltr"
          className="font-mono"
          groupClassName="h-10"
          endAddon={<CopyButton value={stringified} label="UUID" />}
        />
      )}
    </div>
  );
};

export { UuidConverterTab };
