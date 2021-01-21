self.addEventListener("push", function (e) {
  var options = {
    body: "This notification was generated from a push!",
    icon:
      "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377__340.jpg",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };
  e.waitUntil(self.registration.showNotification("Hello world!", options));
});
