process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwdFunc = require("./pwd.js");
    pwdFunc();
  } else if (cmd == "ls") {
    require("./ls.js"); 
  } else if (cmd.substring(0, 3) == "cat") {
    const catFunc = require("./cat.js");
    const file = cmd.substring(4);
    catFunc(file);
    console.log(file);
  }
});