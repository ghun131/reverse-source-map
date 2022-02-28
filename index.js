const fs = require("fs");
const { SourceMapConsumer } = require("source-map");

// webpack source-map

fs.readFile("./6159-4a2ea98f603d0161.js.map", "utf8", async (error, data) => {
  if (error) return console.error(error);

  const parsed = await SourceMapConsumer.with(data, null, (consumer) => {
    console.log(consumer.sourcesContent.length);
    fs.writeFile("example.ts", consumer.sourcesContent.join(" "), function (err) {
      if (err) return console.log(err);
    });
  });
});
