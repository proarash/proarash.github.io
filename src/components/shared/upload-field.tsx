"use client";

import * as React from "react";
import Image from "next/image";
import { ImageIcon, UploadIcon, XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { formatBytes } from "@/lib/image";
import { cn } from "@/lib/utils";

type UploadFieldProps = {
  label?: string;
  description?: string;
  accept?: string;
  file: File | null;
  previewUrl?: string;
  onFileChange: (file: File | null) => void;
  className?: string;
};

const UploadField = ({
  label,
  description,
  accept,
  file,
  previewUrl,
  onFileChange,
  className,
}: UploadFieldProps) => {
  const id = React.useId();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const isAccepted = (selectedFile: File) => {
    if (!accept) return true;
    return accept.split(",").some((type) => {
      const pattern = type.trim();
      if (pattern.endsWith("/*")) {
        return selectedFile.type.startsWith(pattern.slice(0, -1));
      }
      return selectedFile.type === pattern;
    });
  };

  const selectFile = (selectedFile: File | undefined) => {
    if (selectedFile && isAccepted(selectedFile)) {
      onFileChange(selectedFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    selectFile(event.dataTransfer.files[0]);
  };

  const handleRemove = () => {
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "flex min-h-40 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-4 text-center transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-border",
        )}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          className="sr-only"
          onChange={(event) => selectFile(event.target.files?.[0])}
        />
        {file ? (
          <Attachment className="w-full max-w-sm">
            <AttachmentMedia variant={previewUrl ? "image" : "icon"}>
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt={file.name}
                  width={80}
                  height={80}
                  unoptimized
                />
              ) : (
                <ImageIcon />
              )}
            </AttachmentMedia>
            <AttachmentContent className="text-start">
              <AttachmentTitle>{file.name}</AttachmentTitle>
              <AttachmentDescription>
                {formatBytes(file.size)}
              </AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="حذف فایل" onClick={handleRemove}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        ) : (
          <>
            <UploadIcon className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {description ?? "فایل را اینجا رها کنید یا انتخاب کنید"}
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => inputRef.current?.click()}
            >
              انتخاب فایل
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export { UploadField };
