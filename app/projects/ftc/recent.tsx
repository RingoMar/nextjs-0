type chatMessage = {
  username: string;
  timesent: Date;
  colour: string;
  message: string;
};

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
