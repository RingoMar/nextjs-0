const NOT_COLOR = /[^A-F0-9]/gi;

export interface ircMessage {
  raw: string;
  tags: Map<string, string | boolean>;
  prefix: string | null;
  command: string | null;
  params: string[];
}

export function RinParse(data: string) {
  let message: ircMessage = {
    raw: data,
    tags: new Map(),
    prefix: null,
    command: null,
    params: [],
  };

  var position = 0;
  var nextspace = 0;

  if (data.charCodeAt(0) === 64) {
    var nextspace = data.indexOf(" ");

    if (nextspace === -1) {
      return null;
    }

    var rawTags = data.slice(1, nextspace).split(";");

    for (var i = 0; i < rawTags.length; i++) {
      var tag = rawTags[i];
      var pair = tag.split("=");
      message.tags.set(pair[0], pair[1] || true);
    }

    position = nextspace + 1;
  }

  while (data.charCodeAt(position) === 32) {
    position++;
  }

  if (data.charCodeAt(position) === 58) {
    nextspace = data.indexOf(" ", position);

    if (nextspace === -1) {
      return null;
    }

    message.prefix = data.slice(position + 1, nextspace);
    position = nextspace + 1;

    while (data.charCodeAt(position) === 32) {
      position++;
    }
  }

  nextspace = data.indexOf(" ", position);

  if (nextspace === -1) {
    if (data.length > position) {
      message.command = data.slice(position);
      return message;
    }

    return null;
  }

  message.command = data.slice(position, nextspace);

  position = nextspace + 1;

  while (data.charCodeAt(position) === 32) {
    position++;
  }

  while (position < data.length) {
    nextspace = data.indexOf(" ", position);

    if (data.charCodeAt(position) === 58) {
      message.params.push(data.slice(position + 1));
      break;
    }

    if (nextspace !== -1) {
      message.params.push(data.slice(position, nextspace));
      position = nextspace + 1;

      while (data.charCodeAt(position) === 32) {
        position++;
      }

      continue;
    }

    if (nextspace === -1) {
      message.params.push(data.slice(position));
      break;
    }
  }
  return message;
}

function rgbToHsl(r: number, g: number, b: number) {
  // Convert RGB to HSL, not ideal but it's faster than HCL or full YIQ conversion
  // based on http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = Math.min(Math.max(0, (max + min) / 2), 1);
  const d = Math.min(Math.max(0, max - min), 1);

  if (d === 0) {
    return [d, d, l];
  }

  let h;
  switch (max) {
    case r:
      h = Math.min(Math.max(0, (g - b) / d + (g < b ? 6 : 0)), 6);
      break;
    case g:
      h = Math.min(Math.max(0, (b - r) / d + 2), 6);
      break;
    default:
      h = Math.min(Math.max(0, (r - g) / d + 4), 6);
      break;
  }
  h /= 6;

  let s = l > 0.5 ? d / (2 * (1 - l)) : d / (2 * l);
  s = Math.min(Math.max(0, s), 1);

  return `${(h * 10).toFixed()}deg ${(l * 10).toFixed()}% ${(s * 10).toFixed()}% / 50%`;
}

export const convertColor = function (color: string) {
  color = color.replace(NOT_COLOR, "");

  if (color.length < 6) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }

  const r = parseInt(color.substr(0, 2), 16) || 0;
  const g = parseInt(color.substr(2, 2), 16) || 0;
  const b = parseInt(color.substr(4, 2), 16) || 0;

  return rgbToHsl(r, g, b);
};

export function convertEmote(message: string) {}
