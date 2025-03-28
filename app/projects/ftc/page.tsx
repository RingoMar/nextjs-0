"use client";
import CopyIcon from "@/lib/copy";
import { TwitchIRCConnection } from "@/lib/ftcSDK/main";
import { ReactNode, useEffect, useState } from "react";
import { ChatLine } from "./recent";
import { ircMessage } from "@/lib/ftcSDK/helpers";

interface FTCparams {
  channel: null | string;
  [key: string]: string | number | null | boolean;
}

interface chatmessage {
  username: string;
  timesent: Date;
  colour: string;
  message: string;
}
interface chatmessages {
  RecentMessages: chatmessage[];
}

export default function firstTime() {
  const [Channel, setChannel] = useState<string>("");
  const [curr, setCurr] = useState<number>(0);
  const [isConnect, setIsConnect] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date>();
  const [recentMessages, setRecentMessages] = useState<chatmessages>({ RecentMessages: [] });
  const [copyButton, setcopyButton] = useState<string | ReactNode>(<CopyIcon />);
  const [ftcParms, setFtcParms] = useState<FTCparams>({
    channel: null,
  });

  useEffect(() => {
    const handleData = (data: any) => {
      setCurr(data);
    };

    const handleRecentMessages = (data: ircMessage) => {
      let chatter: chatmessage = {
        username: data.tags.get("display-name"),
        colour: data.tags.get("color") ?? "#FFFFFF",
        timesent: new Date(Number(data.tags.get("tmi-sent-ts"))),
        message: data.params[1],
      };
      setRecentMessages((previousState) => ({
        RecentMessages: [...previousState.RecentMessages, chatter],
      }));
    };

    TwitchIRCConnection.on("NewUserCount", handleData);
    TwitchIRCConnection.on("Connection", (e) => setIsConnect(e));
    TwitchIRCConnection.on("PRIVMSG", handleRecentMessages);

    return () => {
      TwitchIRCConnection.off("PRIVMSG", handleRecentMessages);
      TwitchIRCConnection.off("NewUserCount", handleData);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 60000);
    return () => clearInterval(intervalId);
  }, [curr]);

  function updateUrl(): string {
    const url = new URL("http://localhost:2888/");

    for (const key in ftcParms) {
      if (ftcParms[key] === null || ftcParms[key] === false) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, ftcParms[key] as string);
      }
    }

    return url.toString();
  }

  const copyToClipboard = () => {
    if (!ftcParms.channel) {
      return;
    }
    try {
      const timerURL: string = updateUrl();
      navigator.clipboard
        .writeText(`${timerURL}`)
        .then(() => {
          setcopyButton("Copied!");
        })
        .catch((error) => {
          console.error("Unable to copy text to clipboard:", error);
          throw new Error(error);
        });
    } catch (error) {
      console.log("Copy error:", error);
      setcopyButton("Error");
    }

    setTimeout(() => {
      setcopyButton(<CopyIcon />);
    }, 600);
  };

  function connectChannel() {
    setFtcParms((prevtimeParms) => ({
      ...prevtimeParms,
      channel: Channel,
    }));

    if (curr != 0) {
      setCurr(0);
    }

    setStartTime(new Date());
    TwitchIRCConnection.setChannel(Channel);
    TwitchIRCConnection.connect();
  }

  return (
    <div className="bg-gradient-to-bl from-slate-700/10 to-slate-800/10 pb-8 dark:from-slate-700 dark:to-slate-800">
      <div className="container mx-auto min-h-screen w-full pt-4">
        <div className="relative mb-5 w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-5 shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-3 w-full flex-wrap items-center text-xl">
            <h3 className="text-3xl">Twitch Chat First Time Chatter - Dashboard</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="rounded-2xl bg-gray-300 p-3 dark:bg-slate-600">
              <span className="dark:text-white">Browser Soruce Link</span>
              <div className="grid grid-cols-[1fr_5rem] rounded p-4 dark:bg-slate-500">
                <span className="overflow-y-auto` select-all">{updateUrl()}</span>
                <button className="flex cursor-pointer justify-end stroke-gray-800 text-slate-900 active:scale-[0.9] dark:stroke-gray-50 dark:text-white" onClick={() => copyToClipboard()}>
                  {copyButton}
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <h1 className="text-4xl">Connect To a Twitch Chat</h1>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="Search Input"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => setChannel(e.target.value)}
                  placeholder="Enter twtich channel"
                  required
                />
              </div>
              <div className="flex w-full gap-4">
                <button type="submit" className="w-full rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Disconnect
                </button>
                <button
                  type="submit"
                  onClick={connectChannel}
                  className={`${isConnect ? "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : "animate-pulse hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"} w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none`}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-5 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="text-[12vh]" style={{ fontFamily: "monospace" }}>
              {curr}
            </h1>
            <div className="grid grid-cols-3">
              <div>
                <h3>Started Recording</h3>
                <span>{startTime !== undefined ? `${startTime.toLocaleDateString()} ${startTime.toLocaleTimeString()}` : "--/--/-- 00:00:00"}</span>
              </div>
              <div>
                <h3>New chatters Per Mintue</h3>
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">First Time Chatter</h1>

            <p className="mb-8 text-lg">A simple program that can connect to chat and in real time shows the amount of new chatters.</p>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">How It Works</h2>

            <p className="mb-4">
              Using an anonymous connection to a selected streamers chat, we can read every line for parameter in the message <code className="rounded-[0.25rem] bg-slate-600 p-1 text-gray-400">first-msg=1</code> then after finding this we can just simply update the counter
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
            <h1 className="mb-4 text-3xl font-semibold">RECENT MESSAGES</h1>
            <div className="flex h-96 flex-col-reverse overflow-auto rounded bg-gray-700">
              <div className="flex h-5 flex-row items-center gap-x-1">
                <span className="text-xs text-neutral-500 tabular-nums">2025-03-20 19:40:26</span> <span className="font-bold">RingoMar:</span>{" "}
                <span>
                  <img className="inline-block max-h-5 text-wrap" src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_244e79bde17940fab408f9ac4e7e78e1/default/dark/1.0" alt="zaqYoink" title="zaqYoink" />
                  oooooooo
                </span>
              </div>
              {recentMessages.RecentMessages.map((recentmessages, index) => (
                <ChatLine key={index} {...recentmessages} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
