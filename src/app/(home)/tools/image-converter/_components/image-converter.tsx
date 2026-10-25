"use client";

import { useRef, useState } from "react";
import { DownloadIcon, LoaderCircleIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertField } from "@/components/shared/alert-field";
import { UploadField } from "@/components/shared/upload-field";
import {
  convertToWebp,
  downloadBlob,
  formatBytes,
  replaceExtension,
} from "@/lib/image";

const ImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [result, setResult] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState("");
  const currentFileRef = useRef<File | null>(null);

  const handleFileChange = (nextFile: File | null) => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    currentFileRef.current = nextFile;
    setFile(nextFile);
    setResult(null);
    setError("");

    if (!nextFile) {
      setPreviewUrl("");
      setIsConverting(false);
      return;
    }

    setPreviewUrl(URL.createObjectURL(nextFile));
    setIsConverting(true);

    convertToWebp(nextFile)
      .then((blob) => {
        if (currentFileRef.current === nextFile) setResult(blob);
      })
      .catch(() => {
        if (currentFileRef.current === nextFile) {
          setError("تبدیل این عکس امکان پذیر نیست");
        }
      })
      .finally(() => {
        if (currentFileRef.current === nextFile) setIsConverting(false);
      });
  };

  const savedPercent =
    file && result ? Math.round((1 - result.size / file.size) * 100) : 0;

  return (
    <div className="flex w-full flex-col gap-4">
      <UploadField
        label="عکس"
        accept="image/*"
        description="عکس را اینجا رها کنید یا انتخاب کنید"
        file={file}
        previewUrl={previewUrl}
        onFileChange={handleFileChange}
      />
      {error && <AlertField variant="destructive" description={error} />}
      {file && result && (
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{formatBytes(file.size)}</Badge>
          <span className="text-muted-foreground">←</span>
          <Badge variant="outline">{formatBytes(result.size)}</Badge>
          <Badge variant={savedPercent > 0 ? "subtle-success" : "subtle-warning"}>
            {savedPercent > 0
              ? `${savedPercent}٪ کاهش حجم`
              : `${Math.abs(savedPercent)}٪ افزایش حجم`}
          </Badge>
        </div>
      )}
      <Button
        disabled={!file || !result || isConverting}
        onClick={() =>
          file && result && downloadBlob(result, replaceExtension(file.name, "webp"))
        }
      >
        {isConverting ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : (
          <DownloadIcon />
        )}
        دانلود WebP
      </Button>
    </div>
  );
};

export { ImageConverter };
