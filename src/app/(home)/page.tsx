import { LinkCard } from "@/components/shared/link-card";

const tools = [
  {
    href: "/tools/national-code-generator",
    title: "تولید کد ملی",
    description: "تولید کد ملی معتبر و رند برای تست نرم افزار",
    image: "/tools/national-code.svg",
  },
  {
    href: "/tools/jwt-generator",
    title: "تولید و رمزگشایی JWT",
    description: "ساخت توکن JWT با کلید دلخواه و رمزگشایی توکن",
    image: "/tools/jwt.svg",
  },
  {
    href: "/tools/uuid-generator",
    title: "تولید و تبدیل UUID",
    description: "تولید UUID در نسخه های مختلف، اعتبارسنجی و تبدیل",
    image: "/tools/uuid.svg",
  },
  {
    href: "/tools/image-converter",
    title: "تبدیل عکس",
    description: "تبدیل عکس به فرمت WebP با فشرده سازی",
    image: "/tools/image-conversion.svg",
  },
];

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6 px-4 py-8">
      <h1 className="text-2xl font-bold">ابزار های کاربردی</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {tools.map((tool) => (
          <LinkCard key={tool.href} {...tool} />
        ))}
      </div>
    </section>
  );
}
