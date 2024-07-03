const fs = require("fs");
const path = require("path");

const getRoute = (routePath, app)=>{
  const routersPath = path.join(routePath, "routes");

  fs.readdirSync(routersPath).forEach((file, app)=>{
      if (file.endsWith(".js")) {
          const routerModule = require(path.join(routersPath, file));
          const router = routerModule.router;
          app.use(router);
        }
  });
};

module.exports = getRoute;