const ftp = require("basic-ftp");
async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: "iad1-shared-b8-06.dreamhost.com",
      user: "shagra37",
      password: "$$Ch4nge",
      secure: false
    });
    console.log("Connected to FTP server");
    await client.ensureDir("/shawngraydesign.com/nuexpr/");
    await client.clearWorkingDir();
    await client.uploadFromDir("./build");
    console.log("Deployment complete!");
  } catch (err) {
    console.error(err);
  }
  client.close();
}
deploy();