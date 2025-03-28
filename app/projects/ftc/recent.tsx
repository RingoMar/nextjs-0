"use client";
import { useState } from "react";

type chatMessage = {
  time: string;
  username: string;
  colour: string;
  message: string;
};

interface chatmessage {
  usename: string;
  timesent: Date;
  colour: string;
  message: string;
}
interface chatmessages {
  RecentMessages: chatmessage[];
}

export function ChatLine({ username, timesent, colour, message }: chatMessage) {
  let Color = colour ? colour : "#eee";
  return (
    <div className="flex h-5 flex-row items-center gap-x-1 text-nowrap">
      <span className="text-xs text-neutral-500 tabular-nums">
        {timesent.toLocaleDateString()} {timesent.toLocaleTimeString()}
      </span>{" "}
      <span className="font-bold" style={{ color: Color }}>
        {username}:
      </span>{" "}
      <span>{message}</span>
    </div>
  );
}

export default function Recent(recentmessages: chatmessages) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recentmessages.length / 4);
  const startIndex = (currentPage - 1) * 4;
  const paginatedProjects = recentmessages.slice(startIndex, startIndex + 4);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  return (
    <div>
      {paginatedProjects.map((recentmessages, index) => (
        <ChatLine key={index} {...recentmessages} />
      ))}

      <div className="mt-4 flex hidden flex-col items-center">
        <span className="pointer-events-none text-sm text-gray-700 select-none dark:text-gray-400">
          Page <span className="font-semibold text-gray-900 dark:text-white">{currentPage}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span>{" "}
        </span>
        <div className="xs:mt-0 mt-2 flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:not-disabled:-translate-x-1 active:not-disabled:scale-y-[0.9] disabled:cursor-not-allowed disabled:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="pointer-events-none select-none">Prev</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="active::not-disabled:translate-x-1 flex h-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:not-disabled:scale-y-[0.9] disabled:cursor-not-allowed disabled:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="pointer-events-none select-none">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
