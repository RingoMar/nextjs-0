import Link from "next/link";

export default function projects() {
  return (
    <section>
      <div className="bg-gray-50 p-5 dark:bg-gray-900">
        <div className="relative z-10 container mx-auto flex flex-col justify-center">
          <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A few of my most notable or recent projects.</p>
        </div>
        <div className="relative z-10 container mx-auto flex min-h-[70vh] gap-3 h-full">
          <div className="h-65 w-5/10 rounded-lg border border-gray-200 bg-gray-50 p-8 max-sm:w-90 md:w-8/12 md:p-12 dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400">
              <svg className="me-1.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              Utill
            </p>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">The Time Keeper</h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Track your stream start time with pinpoint accuracy down to the millisecond with our OBS Browser Source Stream Marathon Timer.</p>
            <Link replace href="/projects/timekeeper" className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
              Read more
              <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
          <div className="h-65 w-5/10 rounded-lg border border-gray-200 bg-gray-50 p-8 max-sm:w-90 md:w-8/12 md:p-12 dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400">
              <svg className="me-1.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              Utill
            </p>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">First Time chatter</h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Real time track the amount of first time chatters in a streamers chat.</p>
            <Link replace href="/projects/ftc" className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
              Read more
              <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/50"></div>
    </section>
  );
}
