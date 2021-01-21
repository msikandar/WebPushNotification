self.addEventListener("push", function (e) {
  const options = {
    body: "Notification by sikandar",
    icon: "/images/d2.jpg",
  };
  e.waitUntil(self.registration.showNotification("Hero Image", options));
});
