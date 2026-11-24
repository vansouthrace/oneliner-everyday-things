import * as fs from "node:fs";

const entry = "A traffic jam is a hallway full of people all trying to squeeze through one door at once.\nIt works because both are too many things in too little space, but it leaves out that cars cannot politely shuffle sideways the way people can.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
