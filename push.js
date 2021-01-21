var push = require("web-push");

let vapKeys = {
  publicKey:
    "BGvlhg3lLvSTt-wug4WNYuZfqvZF_LABcVG6y8UdkowSevE5p6fuos35XBqqyZZHlXe9X5-ipX9FOBMXUTG8hkU",
  privateKey: "dfs8DxdKN4-Bo0JtKY2W_zkKAn6ZuUCgKIhWzDc5U9U",
};

push.setVapidDetails(
  "mailto:test@code.uk.com",
  vapKeys.publicKey,
  vapKeys.privateKey
);
let sub = {};

push.sendNotification(sub, "test message");
