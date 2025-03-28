import Image from "next/image";
import ThemeSwitcher from "./ThemeIcon";
import Link from "next/link";
import CheckActivePage from "@/lib/activepage";

export default function NavBar() {
  return (
    <nav className="start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-slate-600 dark:bg-slate-800 relative">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 max-sm:flex-row">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/RingoBrand.png" className="h-8 max-sm:h-6 max-sm:w-6" alt="Ringomar Logo" width={32} height={32} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap max-sm:text-lg dark:text-white">RINGO MAR</span>
        </Link>
        <div className="flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://github.com/ringomar" target="_blank" type="button" className="cursor-pointer rounded-lg bg-slate-700 p-2 text-center text-sm font-medium text-white hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-900 dark:focus:bg-slate-800">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" className="h-5 invert" width={35} height={35} alt="Github Link" />
          </Link>
          
          <ThemeSwitcher />
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <CheckActivePage />
        </div>
      </div>

      <span className="absolute rounded-full w-full h-1 bg-blue-900 dark:bg-blue-500 opacity-40 blur-md"></span>
    </nav>
  );
}
