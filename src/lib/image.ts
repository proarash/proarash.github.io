const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const replaceExtension = (fileName: string, extension: string) => {
  const baseName = fileName.replace(/\.[^.]+$/, "");
  return `${baseName}.${extension}`;
};

const convertToWebp = async (file: File, quality = 0.8): Promise<Blob> => {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("canvas not supported");
  context.drawImage(bitmap, 0, 0);
  bitmap.close();

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob?.type === "image/webp") resolve(blob);
        else reject(new Error("webp not supported"));
      },
      "image/webp",
      quality,
    );
  });
};

const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
};

export { convertToWebp, downloadBlob, formatBytes, replaceExtension };
