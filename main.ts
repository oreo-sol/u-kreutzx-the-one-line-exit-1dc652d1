import { mkdirSync, writeFileSync } from "node:fs";

const a = "Dear Manager, I resign \u2014 my out-of-office reply has been";
const b = " on since March, and nobody noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", a + b);
