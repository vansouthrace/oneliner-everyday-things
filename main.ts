import { mkdirSync, writeFileSync } from "node:fs";

// Everyday Things, Two Lines: explain an everyday thing, then why the analogy works.
const entry = [
  "A traffic jam is like a straw full of marbles: too many cars trying to squeeze through one tiny opening at once.",
  "The analogy works because both are about flow getting stuck, but it leaves out that drivers chose to be there, and marbles did not.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
