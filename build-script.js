const shx = require("shelljs");
const fs = require("fs-extra");
(async () => {
  shx.cd("../swrlio-backend");
  shx.exec(`git stash`);
  shx.exec(`git reset HEAD^ --hard && git clean -df && git pull`);
  shx.exec(`git checkout main`);
  shx.exec(`git pull`);
  shx.exec(`npm run build`);
  shx.exec("npm run postbuild");
  shx.cd("../swrlio-deploy");
  /**
   * Frontend Build
   */
  shx.cd("../swrlio-frontend");
  shx.exec(`git stash`);
  shx.exec(`git reset HEAD^ --hard && git clean -df && git pull`);
  shx.exec(`git checkout main`);
  shx.exec(`git pull `);
  shx.exec(`npm run build`);
  shx.cd("../swrlio-deploy");

  /**
   * Copy the Backend Build File
   */
   fs.copySync("../swrlio-backend/build", ".");

   /**
   * Copy the Front End
   */
  fs.emptyDirSync("client");
  fs.copySync("../swrlio-frontend/build", "./client");
})();
