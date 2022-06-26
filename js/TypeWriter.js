const TypeWriter = require("t-writer.js");

const target = document.getElementById("text");

const writer = new TypeWriter(target, {
  loop: true,
  typeColor: "blue",
});

writer.type("A simple syntax makes easy.").rest(500).start();
