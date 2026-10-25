import {
  SignJWT,
  decodeJwt,
  decodeProtectedHeader,
  jwtVerify,
  type JWTPayload,
} from "jose";

const encodeSecret = (secret: string) => new TextEncoder().encode(secret);

const createSamplePayload = (): JWTPayload => ({
  sub: "1234567890",
  name: "Arash",
  admin: true,
});

const signJwt = async (payload: JWTPayload, secret: string) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .sign(encodeSecret(secret));
};

const decodeJwtToken = (token: string) => {
  return {
    header: decodeProtectedHeader(token),
    payload: decodeJwt(token),
  };
};

const verifyJwt = async (token: string, secret: string) => {
  try {
    await jwtVerify(token, encodeSecret(secret));
    return true;
  } catch {
    return false;
  }
};

export { createSamplePayload, decodeJwtToken, signJwt, verifyJwt };
