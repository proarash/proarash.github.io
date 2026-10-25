import { ToolsBackLink } from "./_components/tools-back-link";

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <ToolsBackLink />
      {children}
    </div>
  );
}
