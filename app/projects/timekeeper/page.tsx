import OutLink from "@/lib/OutLink";
import Image from "next/image";
import Link from "next/link";

export default function dock_timekeeper() {
  return (
    <div className="bg-white pt-8 pb-16 antialiased lg:pt-16 lg:pb-24 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl justify-between px-4">
        <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl">
          <header className="not-format mb-4 lg:mb-6">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">The Timekeeper</h1>
            <time dateTime="2024-04-08" title="May 8th, 2024">
              8 May, 2024
            </time>
            <div className="mt-4 flex gap-1">
              <Link href="https://timekeeper.ringomar.com" prefetch className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-slate-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 hover:text-red-400">
                <OutLink />
                Documentation
              </Link>
              <Link href="https://timer.ringomar.com" prefetch className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-slate-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                <OutLink />
                Preview
              </Link>
            </div>
          </header>

          <section className="mb-5">
            <p className="mb-4">This is a simple web application that displays the elapsed time since a specified timestamp. It can be useful for tracking how much time has passed since a particular event or milestone.</p>

            <figure className="mb-4">
              <Image className="pointer-events-none rounded object-contain select-none" src="/timekeeper.jpg" width={850} height={350} alt="timekeeperapp" />
            </figure>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">How it works</h2>
            <div className="mb-4">
              This program works by displaying a real-time timer that counts how many hours, minutes, and seconds have passed since a specified start time. When the webpage loads, it either uses the current time or a time provided through a URL to set the starting point. The program then continuously calculates the difference between the current time and this start time, updating the display every fraction of a
              second.
              <p className="mb-4">The result is a dynamic, live timer that shows elapsed time accurately and smoothly without requiring the user to refresh the page. This makes it ideal for tracking time during events, live streams, or any activity where precise time monitoring is needed.</p>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white" id="showcase">
                In Action <a href="#showcase">#</a>
              </h2>
              <p className="mb-4">
                Primarily designed for{" "}
                <Link href="https://www.twitch.tv/kaicenat" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500">
                  KaiCenat
                </Link>{" "}
                it can be seen when he is doing a marathon stream mostly.
              </p>
              <p className="mb-4">
                A video of kai using the timer, and showing he sent the timer link to{" "}
                <Link href="https://www.youtube.com/c/IShowSpeed" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500">
                  IShowSpeed
                </Link>{" "}
                during their joint stream marathon.
                <video className="videoAction pointer-events-none object-contain select-none" id="displayVideo" src="/J3r7HCiwYevq8sE2.mp4" muted autoPlay loop></video>
              </p>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white" id="recognition">
                Recognition <a href="#recognition">#</a>
              </h2>
              <div className="mb-4">
                <p>
                  The timer was also featured on a clip during the 2024{" "}
                  <Link href="https://archive.ph/7GIbP" target="_blank" className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500">
                    Twitch Communty Recap
                  </Link>{" "}
                  speaking about the impact of Elden Ring.
                </p>
                <Image src="/1734320070.png" width={560} height={360} className="pointer-events-none h-full w-full object-contain select-none" alt="Screenshot of the website display" />
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
