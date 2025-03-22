import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../public/topography.svg";
import Pagination from "./components/Pagination";
import PoweredBy from "./components/powerd";

export default function Home() {
  return (
    <>
      <div className="animate-scroll w-full bg-slate-500/60" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
        <div className="container mx-auto mb-4 flex flex-wrap items-center p-5">
          <div className="sm:w-full md:w-2/3">
            <h1 className="text-[10em] font-[700] text-white select-none max-sm:text-[3.9em]">RINGO MAR</h1>
            <p className="text-lg text-white select-none dark:text-gray-400">The name is ringo, get with the lingo.</p>
          </div>
          <div className="flex h-[450] justify-center max-sm:h-full sm:w-full md:w-1/3">
            <Image src="/ringoringo.png" width={450} height={450} className="pointer-events-none object-contain select-none" alt="Header logo" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-4 flex gap-4 max-sm:flex-col">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm max-sm:mx-auto dark:border-gray-700 dark:bg-gray-800">
          <h4 className="mb-2 border-b-1 border-b-slate-300/30 bg-gray-950/10 p-4 text-xl font-bold text-gray-900 dark:text-white">✨ Featured</h4>
          <div className="p-6">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Time Keeper</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Use Kai Cenat's timer, featuring the Fortnite theme and more! Track your gaming streams with pinpoint accuracy—down to the millisecond—using our OBS Browser Source Stream Marathon Timer.</p>
            <Link href="https://timekeeper.ringomar.com/" className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Use Now
              <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm max-sm:mx-auto dark:border-gray-700 dark:bg-gray-800">
          <div className="flex h-full flex-col justify-center p-6">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First Time Chatter</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A overlay that displays the real time first time chatters in a Twitch chat.</p>
            <Link href="projects/ftc" className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Use Now
              <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-5 w-full max-w-8/10">
        <Pagination />
      </div>
      <div className="bg-gradient-to-b from-blue-500/20 to-transparent dark:to-gray-800">
        <div className="container mx-auto w-full max-w-8/10 pb-5">
          <div className="relative py-12 text-center">
            <h2 className="relative inline-block bg-gradient-to-b from-black to-blue-500 bg-clip-text text-5xl font-bold text-transparent max-sm:text-3xl dark:from-gray-300 dark:text-white">
              ENGINEERING WITH
              <span className="absolute bottom-[-5px] left-1/2 h-[6px] w-[120%] -translate-x-1/2 rounded-full bg-blue-500 opacity-75 blur-md"></span>
              <span className="absolute bottom-[-5px] left-1/2 h-[4px] w-[110%] -translate-x-1/2 rounded-full bg-blue-400"></span>
            </h2>
          </div>
          <PoweredBy />
        </div>
      </div>
    </>
  );
}
