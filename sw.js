self.addEventListener("push", function (e) {
  const options = {
    icon: "/images/d2.jpg",
    image: "https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png",
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
