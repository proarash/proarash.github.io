import {
  parse,
  stringify,
  v1,
  v1ToV6,
  v3,
  v4,
  v5,
  v6,
  v6ToV1,
  v7,
  validate,
  version,
} from "uuid";

type UuidVersion = "v1" | "v3" | "v4" | "v5" | "v6" | "v7";

const uuidNamespaces = {
  dns: v3.DNS,
  url: v3.URL,
};

const isNamespacedVersion = (uuidVersion: UuidVersion) =>
  uuidVersion === "v3" || uuidVersion === "v5";

const generateUuid = (
  uuidVersion: UuidVersion,
  name = "",
  namespace = uuidNamespaces.dns,
): string => {
  switch (uuidVersion) {
    case "v1":
      return v1();
    case "v3":
      return v3(name, namespace);
    case "v5":
      return v5(name, namespace);
    case "v6":
      return v6();
    case "v7":
      return v7();
    default:
      return v4();
  }
};

const uuidToBytes = (uuid: string): number[] => Array.from(parse(uuid));

const bytesToUuid = (bytes: number[]): string =>
  stringify(Uint8Array.from(bytes));

const parseBytes = (value: string): number[] => {
  const bytes = value
    .replace(/[[\]]/g, "")
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(Number);

  if (
    bytes.length !== 16 ||
    bytes.some((byte) => !Number.isInteger(byte) || byte < 0 || byte > 255)
  ) {
    throw new Error("invalid bytes");
  }

  return bytes;
};

const convertUuidVersion = (uuid: string): string | null => {
  const uuidVersion = version(uuid);
  if (uuidVersion === 1) return v1ToV6(uuid);
  if (uuidVersion === 6) return v6ToV1(uuid);
  return null;
};

export type { UuidVersion };
export {
  bytesToUuid,
  convertUuidVersion,
  generateUuid,
  isNamespacedVersion,
  parseBytes,
  uuidNamespaces,
  uuidToBytes,
  validate as validateUuid,
  version as getUuidVersion,
};
