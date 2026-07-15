const expectedLocation = "https://store.cocos.com/app/detail/8710";
const trackedLinks = [
  "https://go.jimmyjing.dev/cocos/github/readme",
  "https://go.jimmyjing.dev/cocos/github/quickstart",
  "https://go.jimmyjing.dev/cocos/github/release",
];

for (const url of trackedLinks) {
  const response = await fetch(url, {
    method: "HEAD",
    redirect: "manual",
  });
  const location = response.headers.get("location");
  if (response.status !== 302 || location !== expectedLocation) {
    throw new Error(
      `${url} returned ${response.status} -> ${location || "(missing location)"}`,
    );
  }
  console.log(`ok ${url} -> ${location}`);
}
