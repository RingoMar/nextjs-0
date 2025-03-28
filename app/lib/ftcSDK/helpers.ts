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
