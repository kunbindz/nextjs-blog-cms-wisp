"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { FolderDown, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

export const Navigation: FunctionComponent = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tran_Xuan_Loc_CV .pdf"; // Adjust the path to your PDF
    link.download = "Tran_Xuan_Loc_CV .pdf"; // Set the name of the file
    link.click(); // Programmatically click the link to start download
  };

  return (
    <nav>
      <div className=" md:flex gap-2 items-center">
        <DarkModeToggle />

        <div className={"tooltipWrapper"}>
          <Button
            variant="ghost"
            className="p-2"
            onClick={handleDownload}
            data-tooltip-target="tooltip-dark"
            type="button"
          >
            <FolderDown className="w-6 h-6" />
          </Button>
          <span className={"tooltipText"}>Download my CV</span>
        </div>
        <Link href="https://github.com/kunbindz" target="_blank">
          <Button variant="ghost" className="p-2">
            <Github className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a placeholder while mounting
  }

  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <Link href="/" className="flex items-center">
        <div className="animate-wave">
          <Image
            src={"https://fireship.io/img/logo.svg"}
            alt="logo"
            width={45}
            height={45}
            id="logo"
          />
          <Image
            src={"https://fireship.io/img/fire.gif"}
            alt="logo"
            width={45}
            height={45}
            className="mb-1"
            id="logoBg"
          />
        </div>
        <div className="group ml-2 text-xl font-bold transition duration-300">
          <h3 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
            {config.blog.name}
          </h3>
          <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[84%] dark:bg-white"></span>
        </div>
      </Link>
      <Navigation />
    </section>
  );
};
