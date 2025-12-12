import express from "express";

const app = express();
const PORT = 3000;

// Change these to your actual URLs
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=app.maximize.mobile&pcampaignid=web_share";
const IOS_URL = "https://apps.apple.com/us/app/maximize-money/id6751834788";
const WEBSITE_URL = "https://www.maximize.money/";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/download", (req, res) => {
  const userAgent = req.headers["user-agent"] || "";

  if (/android/i.test(userAgent)) {
    return res.redirect(ANDROID_URL);
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return res.redirect(IOS_URL);
  }

  // Fallback: Desktop or unknown → redirect to website
  return res.redirect(WEBSITE_URL);
});

app.post("/validate", (req, res) => {

  console.log("📩 Request Received!");
  console.log(req.body); // log the body sent by EA

  // Always respond success for testing
  return res.json({
    success: true,
    message: "Request received successfully"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
