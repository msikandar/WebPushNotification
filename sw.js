self.addEventListener("push", function (e) {
  const options = {
    image: "/images/d2.jpg",
  };
  e.waitUntil(self.registration.showNotification("Hero Image", options));
});
