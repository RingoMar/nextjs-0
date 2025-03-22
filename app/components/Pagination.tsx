"use client";
import Link from "next/link";
import Image from "next/image";
import projectData from "../../public/repos.json";
import { useState } from "react";

type ProjectItem = {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

function Project({ imgSrc, title, description, link, linkText }: ProjectItem) {
  return (
    <Link href={link} className="mb-4 flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-100 md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        className="pointer-events-none w-full rounded-t-lg object-contain select-none max-sm:h-40 max-sm:w-40 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={imgSrc}
        alt={title}
        width={256}
        height={256}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMgSURBVHhe7dQhAQAgEMDAT4InAv2DgafCTpxZgM3a5wJN8wegwwAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAgzAAg7AFHhhZyMks+ggAAAABJRU5ErkJggg=="
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <button type="button" className="inline-flex w-50 items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {linkText}
          <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </Link>
  );
}

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectData.projects.length / 4);
  const startIndex = (currentPage - 1) * 4;
  const paginatedProjects = projectData.projects.slice(startIndex, startIndex + 4);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  return (
    <div>
      {paginatedProjects.map((project, index) => (
        <Project key={index} {...project} />
      ))}

      <div className="mt-4 flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page <span className="font-semibold text-gray-900 dark:text-white">{currentPage}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span>{" "}
        </span>
        <div className="xs:mt-0 mt-2 flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:not-disabled:-translate-x-1 active:not-disabled:scale-y-[0.9] disabled:cursor-not-allowed disabled:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="active::not-disabled:translate-x-1 flex h-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:not-disabled:scale-y-[0.9] disabled:cursor-not-allowed disabled:opacity-75 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
