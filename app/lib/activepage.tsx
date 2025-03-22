"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CheckActivePage() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-slate-800">
      <li>
        <Link href="/" className={`block rounded-sm px-3 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-slate-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-slate-500 ${pathname === "/" ? "text-blue-300" : "text-gray-900 dark:text-white"}`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/projects" className={`block rounded-sm px-3 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-slate-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-slate-500 ${pathname === "/projects" ? "text-blue-300" : "text-gray-900 dark:text-white"} `}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="/websites" className={`block rounded-sm px-3 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-slate-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-slate-500 ${pathname === "/websites" ? "text-blue-300" : "text-gray-900 dark:text-white"}`}>
          Websites
        </Link>
      </li>
    </ul>
  );
}
