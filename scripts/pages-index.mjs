import { writeFileSync } from "node:fs";

// GitHub Pages serves this file at the site root. The app lives under /en and /fr.
writeFileSync(
  "out/index.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=./en/" />
    <link rel="canonical" href="./en/" />
    <title>AccounTrust Services</title>
  </head>
  <body>
    <p><a href="./en/">AccounTrust Services</a></p>
  </body>
</html>
`,
);
