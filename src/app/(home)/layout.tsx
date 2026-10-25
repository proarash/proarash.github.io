import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-360 flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
