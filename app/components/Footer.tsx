import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://ringomar.com/" className="flex items-center">
              <Image src="/RingoBrand.png" className="me-3 h-8" alt="Ringomar Logo" width={32} height={32} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RINGO MAR</span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="https://github.com/Ringomar" className="hover:underline">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/_ringomar" className="hover:underline">
                    Ringomar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="https://ko-fi.com/Y8Y1WZQDA" className="flex hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>{" "}
                    Send a Tip
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://ringomar.com/" className="hover:underline">
              Ringomar
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
