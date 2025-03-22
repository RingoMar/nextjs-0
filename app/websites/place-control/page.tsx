import OutLink from "@/lib/OutLink";
import Image from "next/image";
import Link from "next/link";

export default function dock_placecontrol() {
  return (
    <div className="bg-white pt-8 pb-16 antialiased lg:pt-16 lg:pb-24 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl justify-between px-4">
        <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl">
          <header className="not-format mb-4 lg:mb-6">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Place Control</h1>
            <time dateTime="2023-06-20" title="July 20th, 2023">
              Thursday, July 20, 2023, 10:03:31 PM
            </time>
            <div className="mt-4 flex gap-1">
              <Link href="https://ringomar.github.io/place-control/" prefetch className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-slate-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                <OutLink />
                Program
              </Link>
            </div>
          </header>

          <section className="mb-5">
            <p className="mb-4">Time and time again, I look at something and think, 'No way, something so simple can't be done much simpler than this.'</p>
            <p className="mb-4">Out of the ashes of frustration, Place Control was born!</p>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white" id="what">
              What is r/place
            </h2>
            <p className="mb-4">
              r/place is an online collaborative art project that was hosted by Reddit in 2017. It consisted of a large blank canvas where users could place colored pixels, one at a time, every few minutes. The goal was to collaboratively create and modify pixel art and designs in real-time. Users could place pixels of any color at any location on the canvas, leading to the creation of intricate artworks, memes, and
              community symbols. It was a social experiment that attracted widespread participation from Reddit users around the world and resulted in a dynamic and constantly evolving digital canvas.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white" id="prog">
              Origin of Project
            </h2>
            <p className="mb-4">Reddit announced changes to its free API in April 2023, which will now require developers to pay for access. This change is affecting third-party apps like Apollo, which may need to pay up to $20 million per year for API requests. Several popular third-party Reddit apps, including Apollo, ReddPlanet, Sync, and Reddit is Fun, are shutting down due to the new API pricing.</p>
            <p className="mb-4">The return of r/Place is seen as a response to controversial API changes in the platform. Besides the point, r/place has become popular among discords, gamers & streamers in the Twitch community. One of the notable communities that rise every year for r/place is Destiny.</p>
            <p className="mb-4">
              Destiny devised a foolproof method for organizing his community and coordinating their pixel placements on the canvas. He implemented a rule allowing only users born on a specific day of the month to participate. However, tracking all the different birth months, days, and cool down times posed a challenge. To address this issue, I developed a simple website that, when activated, would track the cool
              down period and display which users were ready to contribute. This tool gained widespread attention as its public URL enabled many others to adopt and adapt our method.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white" id="dev">
              Development Cycle
            </h2>

            <h3 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">It started with a concept in MS Paint</h3>
            <p className="mb-4">In this moment I had a working theory and in saying it out loud to a fellow chatter I was able to create a concept really quickly of what I believe would work</p>
            <Image width={400} height={300} src="/place/mspaint_1689905011.png" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />

            <h3 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">Then in Javascript we array the buttons and lay them out on the page, add some css styles and have the prototype.</h3>
            <Image width={900} height={400} src="/place/brave_1689910519.png" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />

            <h3 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">Then we made it come alive!</h3>

            <p className="mb-1">The cyan color being part of the final version was changed out for a blue color that matches Destiny's theme.</p>
            <Image width={900} height={400} src="/place/brave_1689956368.png" className="pointer-events-none mb-4 rounded object-contain select-none" alt="Responsive image" />
            <p className="mb-1">Notice the "DEFCON" button that never made it into the final version it was re/placed later for start all button.</p>
            <Image width={900} height={400} src="/place/brave_1689960979.gif" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />
            <div className="embed-responsive embed-responsive-16by9">
              <video src="/place/brave_1689956472.mp4" controls autoPlay loop className="pointer-events-none rounded object-contain select-none" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">
              <strong>4.</strong> We have multiple streamers using our program to combat this i added branding everywhere and these boxes that was a troll to mess with the bitrate on stream.
            </h3>

            <Image width={900} height={400} src="/place/brave_1690092752.png" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />
            <Image width={900} height={400} src="/place/brave_1690135197.png" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />
            <h3 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">Here are some stats from the people viewing the program and doing PR's etc</h3>
            <Image width={900} height={400} src="/place/brave_1690310040.jpg" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />
            <p className="mb-4">Here are examples of streams using tha program and being recommend it.</p>
            <Image width={900} height={400} src="/place/chatterino_1690079731.png" className="pointer-events-none rounded object-contain select-none" alt="Responsive image" />
          </section>
        </article>
      </div>
    </div>
  );
}
