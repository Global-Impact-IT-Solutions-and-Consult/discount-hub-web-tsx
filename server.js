const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3033;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Enable CORS for all routes
  server.use(cors());

  // Define your custom Express routes here
  server.get("/custom-route", (req, res) => {
    res.send("This is a custom route using Express.js");
  });

  // Handle Next.js routes
  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      return app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      return app.render(req, res, "/b", query);
    } else {
      return handle(req, res, parsedUrl);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

// // const cors = require("cors");
// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const port = process.env.PORT || 3033;

// const app = next({ dev, hostname, port });
// const handle = app.getRequestHandler();

// // app.prepare().then(() => {
// //   // Define CORS options to allow specific origin(s)
// //   const corsOptions = {
// //     origin: "http://discounthub.local", // Replace with the URL you want to allow
// //   };

// //   // Create an instance of your server
// //   const server = createServer(async (req, res) => {
// //     try {
// //       // Enable CORS with the specified options
// //       cors(corsOptions)(req, res, () => {});

// //       const parsedUrl = parse(req.url, true);
// //       const { pathname, query } = parsedUrl;

// //       if (pathname === "/a") {
// //         await app.render(req, res, "/a", query);
// //       } else if (pathname === "/b") {
// //         await app.render(req, res, "/b", query);
// //       } else {
// //         await handle(req, res, parsedUrl);
// //       }
// //     } catch (err) {
// //       console.error("Error occurred handling", req.url, err);
// //       res.statusCode = 500;
// //       res.end("internal server error");
// //     }
// //   });

// //   server.listen(port, (err) => {
// //     if (err) throw err;
// //     console.log(`> Ready on http://${hostname}:${port}`);
// //   });
// // });

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       // Enable CORS for all routes
//       // cors()(req, res, () => {});

//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;

//       if (pathname === "/a") {
//         await app.render(req, res, "/a", query);
//       } else if (pathname === "/b") {
//         await app.render(req, res, "/b", query);
//       } else {
//         await handle(req, res, parsedUrl);
//       }
//     } catch (err) {
//       console.error("Error occurred handling", req.url, err);
//       res.statusCode = 500;
//       res.end("internal server error");
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });
