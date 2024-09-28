"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { config } from "@/config";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className=" md:flex items-center">
        {/* {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))} */}
        <DarkModeToggle />
      </div>
      {/* <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div> */}
    </nav>
  );
};

export const Header: FunctionComponent = () => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a placeholder while mounting
  }

  const logoSrc = theme === "dark" ? "/images/logo2.png" : "/images/logo.jpg";

  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <Link href="/" className="flex items-center">
        {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          {config.blog.name}
        </h1> */}
          <div className="animate-wave">
            {/* <Logo className="fill-dark dark:fill-white" /> */}
            <Image
              src={logoSrc}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="group ml-2 text-xl font-bold transition duration-300">
            <h3 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
              {config.blog.name}
            </h3>
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[90%] dark:bg-white"></span>
          </div>
      </Link>
      <Navigation />
    </section>
  );
};
