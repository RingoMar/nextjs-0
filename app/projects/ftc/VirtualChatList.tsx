"use client";
import { convertColor } from "@/lib/ftcSDK/helpers";
import { useRef, useState, useEffect } from "react";

interface chatmessage {
  username: string;
  time: Date;
  colour: string;
  message: string;
}

interface VirtualChatListProps {
  messages: chatmessage[];
  height?: number;
  itemHeight?: number;
}

export function VirtualChatList({ messages, height = 400, itemHeight = 20 }: VirtualChatListProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItemsCount = Math.ceil(height / itemHeight);
  const totalItems = messages.length;

  const firstVisibleIndex = Math.floor(scrollTop / itemHeight);
  const visibleMessages = messages.slice(firstVisibleIndex, firstVisibleIndex + visibleItemsCount);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        height,
        overflowY: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalItems * itemHeight, position: "relative" }}>
        {visibleMessages.map((chat, index) => (
          <div
            key={index + firstVisibleIndex}
            style={{
              position: "absolute",
              top: (index + firstVisibleIndex) * itemHeight,
              width: "100%",
            }}
          >
            <ChatLine {...chat} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ChatLineProps extends chatmessage {}

export function ChatLine({ username, time, colour, message }: ChatLineProps) {
  return (
    <div className="flex h-5 flex-row items-center gap-x-1 p-1 text-nowrap">
      <span className="text-xs text-neutral-500 tabular-nums">{time.toLocaleTimeString()}</span>

      <span className="font-bold" style={{ color: `hls(${String(convertColor(colour))})` }}>
        {username}
        <span className="text-white">:</span>
      </span>
      <span>{message}</span>
    </div>
  );
}
