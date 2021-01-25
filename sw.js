self.addEventListener("push", function (e) {
  let _data = e.data ? JSON.parse(e.data.text()) : {};
  console.log(_data);
  const options = {
    body: _data.message,
    icon: _data.icon,
    image: _data.image,
    tag: _data.tag,
  };
  e.waitUntil(self.registration.showNotification(_data.title, options));
});
