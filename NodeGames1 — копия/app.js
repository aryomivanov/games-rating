const http = require("http");
const { gameRouteController, 
      mainRouteController,
      voteRouteController,
      defaultRouteController } = require("./controllers/");

const server = http.createServer((req, res) => {
      server.listen(3005, () => {
            console.log("Server is listening on port 3005");
      })
  const url = req.url;
  switch (url) {
    case "/":
            mainRouteController(res, "/index.html", ".html");
      break;
      case "/game":
            gameRouteController(res);
      break;
      case "/vote":
            voteRouteController(req, res);
      break;
      default:
        defaultRouteController(res, url);
  }
}); 