self.addEventListener("push", function (e) {
  const options = {
    icon: "/images/d2.jpg",
    image: "/images/d3.jpg",
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      {
        action: "close",
        title: "I don't want any of this",
        icon: "images/xmark.png",
      },
    ],
  };
  e.waitUntil(self.registration.showNotification("Hero Image", options));
});
