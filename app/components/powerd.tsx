import Image from "next/image";

export default function PoweredBy() {
  return (
    <div className="m-20 flex items-center justify-center gap-8 max-sm:m-0 max-sm:flex-col md:max-xl:flex-col xl:flex-row">
      <div className="flex gap-4">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width={128} height={128} alt="Typescript Logo" className="pointer-events-none object-contain select-none max-sm:h-20" />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width={128} height={128} alt="Next Js Logo" className="pointer-events-none object-contain select-none max-sm:h-20 dark:invert" />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width={128} height={128} alt="React Logo" className="pointer-events-none object-contain select-none max-sm:h-20" />
      </div>
      <div className="pointer-events-none flex gap-4 object-contain select-none">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" width={128} height={128} alt="Tailwind Dark Logo" className="pointer-events-none object-contain select-none max-sm:h-20 not-dark:hidden " />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" width={128} height={128} alt="Tailwind Light Logo" className="pointer-events-none object-contain select-none max-sm:h-20 dark:hidden " />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" width={128} height={128} alt="Python Logo" className="pointer-events-none object-contain select-none max-sm:h-20" />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" width={128} height={128} alt="Go Logo" className="pointer-events-none object-contain select-none max-sm:h-20" />
      </div>
      <div className="pointer-events-none flex gap-4 object-contain select-none">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" width={128} height={128} alt="Docker Logo" className="pointer-events-none object-contain select-none max-sm:h-20" />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" width={128} height={128} alt="VsCode Logo" className="pointer-events-none object-contain select-none max-sm:h-20" />
      </div>
    </div>
  );
}
