import { EventEmitter } from "events";
import { RinParse } from "./helpers";

const rx = /\r?\n/g;
const rx2 = /\s/g;
const debug = 0;

class twitchIRCConnection extends EventEmitter {
  private connected: boolean;
  private interval: any;
  private channel: string;
  private client: WebSocket;
  private currentCount: number;

  public constructor() {
    super();
    this.connected = false;
    this.interval = null;
    this.channel = "";
    this.client = new WebSocket("wss://irc-ws.chat.twitch.tv/");
    this.currentCount = 0;
  }

  public connect() {
    if (this.interval === null) {
      this.interval = setInterval(() => this._attemptConnection(), 2000);
    }
  }

  public getCurrentCount() {
    return this.currentCount;
  }

  public getConnectionState() {
    return this.connected;
  }

  public setChannel(channel: string) {
    this.channel = channel.replace(/\s/g, "");
    if (this.connected) {
      this.connected = false;

      this.emit("Connection", false);
      this.client.close();
      this.connect();
    }
  }

  public TwitchDisconnect() {
    if (this.connected) {
      this.connected = false;
      this.emit("Connection", false);
      this.client.close();
    }
  }

  private _attemptConnection() {
    if (this.connected) {
      this._onConnect();
      return;
    }
    this.client = new WebSocket("wss://irc-ws.chat.twitch.tv/");
    this.client.onopen = () => {
      this.connected = true;
      this.emit("Connection", true);
      this._onConnect();

      this.client.send("CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership");
      this.client.send("PASS oauth:1231231");
      this.client.send("NICK justinfan123");
      if (this.channel) {
        this.client.send(`JOIN #${this.channel}`);
      }

      console.log("Connected to Twitch!");
    };
    this.client.onmessage = (e) => {
      const lines = e.data.split(rx);
      for (const line of lines) {
        if (line.replace(rx2, "") === "") {
          continue;
        }
        const parsed = this.parseIrcMessage(line);
        if (line === "PING :tmi.twitch.tv") {
          this.client.send("PONG");
          return;
        }
      }
    };

    this.client.onerror = () => {
      if (!this.interval) {
        this.connected = false;

        this.emit("Connection", false);
        this.client.close();
      }
      this.connect();
    };
  }

  _onConnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  private parseIrcMessage(line: string) {
    const match = line.match(/:tmi.twitch.tv (.+) #/);
    const parsedMessage = {
      text: line,
      command: match ? match[1] : null,
    };

    if (line.includes("first-msg=1")) {
      this.currentCount = this.currentCount + 1;
      this.emit("NewUserCount", this.currentCount);
      this.emit("PRIVMSG", RinParse(line));
    }

    return parsedMessage;
  }
}


export const TwitchIRCConnection = new twitchIRCConnection();
