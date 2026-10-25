"use client";

import { Suspense, use, useState, useTransition } from "react";
import {
  CircleCheckIcon,
  CircleXIcon,
  KeyRoundIcon,
  RefreshCwIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlertField } from "@/components/shared/alert-field";
import { CopyButton } from "@/components/shared/copy-button";
import { InputField } from "@/components/shared/input-field";
import { TextareaField } from "@/components/shared/textarea-field";
import {
  createSamplePayload,
  decodeJwtToken,
  signJwt,
  verifyJwt,
} from "@/lib/jwt";

type SignResult = { token: string; error: string };

const signToken = (secret: string): Promise<SignResult> =>
  signJwt(createSamplePayload(), secret)
    .then((token) => ({ token, error: "" }))
    .catch(() => ({
      token: "",
      error: "امکان ساخت JWT با این کلید وجود ندارد",
    }));

const decodeToken = (token: string) => {
  try {
    return JSON.stringify(decodeJwtToken(token), null, 2);
  } catch {
    return null;
  }
};

const checkSignature = (token: string, secret: string) =>
  token && decodeToken(token)
    ? verifyJwt(token, secret)
    : Promise.resolve(null);

const TokenOutput = ({ result }: { result: Promise<SignResult> }) => {
  const { token, error } = use(result);

  return (
    <>
      <TextareaField
        label="JWT"
        value={token}
        readOnly
        dir="ltr"
        rows={4}
        className="font-mono break-all"
        labelAction={<CopyButton value={token} label="JWT" />}
      />
      {error && <AlertField variant="destructive" description={error} />}
    </>
  );
};

const SignatureBadge = ({
  verification,
}: {
  verification: Promise<boolean | null>;
}) => {
  const isVerified = use(verification);

  if (isVerified === null) return null;

  return (
    <Badge variant={isVerified ? "success" : "destructive"}>
      {isVerified ? <CircleCheckIcon /> : <CircleXIcon />}
      {isVerified ? "امضا معتبر است" : "امضا نامعتبر است"}
    </Badge>
  );
};

const JwtForm = () => {
  const [secret, setSecret] = useState("secret");
  const [encodedToken, setEncodedToken] = useState("");
  const [tokenResult, setTokenResult] = useState(() => signToken(secret));
  const [verification, setVerification] = useState(() =>
    Promise.resolve<boolean | null>(null),
  );
  const [, startTransition] = useTransition();

  const trimmedToken = encodedToken.trim();
  const decoded = trimmedToken ? decodeToken(trimmedToken) : null;

  const handleSecretChange = (value: string) => {
    setSecret(value);
    startTransition(() => {
      setTokenResult(signToken(value));
      setVerification(checkSignature(trimmedToken, value));
    });
  };

  const handleEncodedTokenChange = (value: string) => {
    setEncodedToken(value);
    startTransition(() => {
      setVerification(checkSignature(value.trim(), secret));
    });
  };

  const handleGenerate = () => {
    startTransition(() => {
      setTokenResult(signToken(secret));
    });
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-4">
        <InputField
          label="کلید (Secret)"
          value={secret}
          onChange={(event) => handleSecretChange(event.target.value)}
          dir="ltr"
          className="font-mono"
          groupClassName="h-10"
          startAddon={<KeyRoundIcon />}
        />
        <Suspense>
          <TokenOutput result={tokenResult} />
        </Suspense>
        <Button onClick={handleGenerate}>
          <RefreshCwIcon />
          تولید JWT
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <TextareaField
          label="رمزگشایی JWT"
          value={encodedToken}
          onChange={(event) => handleEncodedTokenChange(event.target.value)}
          placeholder="JWT را اینجا وارد کنید"
          dir="ltr"
          rows={4}
          className="font-mono break-all"
          aria-invalid={!!trimmedToken && !decoded}
          labelAction={
            <Suspense>
              <SignatureBadge verification={verification} />
            </Suspense>
          }
        />
        {trimmedToken && !decoded && (
          <AlertField
            variant="destructive"
            description="JWT وارد شده معتبر نیست"
          />
        )}
        {decoded && (
          <TextareaField
            label="محتوای JWT"
            value={decoded}
            readOnly
            dir="ltr"
            className="font-mono"
            labelAction={<CopyButton value={decoded} label="محتوای JWT" />}
          />
        )}
      </div>
    </div>
  );
};

export { JwtForm };
