self.addEventListener("push", function (e) {
    const options = {
        image: '/images/download.jpeg'
      };
  e.waitUntil(self.registration.showNotification("Hero Image", options));
});
