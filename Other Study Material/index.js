import { ChatGPTAPI } from "chatgpt";
import * as fs from "fs";

const CreateFiles = fs.createWriteStream("./notes.txt", {
  flags: "a", //flags: 'a' preserved old data
});

const topics = [
  "What is a Map in javascript",
  "how to Create new map in javascript",
  "how to add value in a map in javascript",
  "what is Chaining in map in javascript",
  "what is Map get function in javascript",
  "what is Map has function in javascript",
  "what is Map size function in javascript",
  "what is Map clear function in javascript",
  "explain Array as key of Map in javascript",
  "explain Iteration of Map in javascript",
  "how to convert Object to map in javascript",
  "how to convert Map to array in javascript",
  "Use forEach function on map in javascript",
];

async function myFunction(topic) {
  const api = new ChatGPTAPI({
    apiKey: "sk",
  });
  const res = await api.sendMessage(topic);
  return res;
}

async function printTopicDetails() {
  for (const topic of topics) {
    const details = await myFunction(topic);
    console.log(`Topic: ${topic}\nDetails: ${details.text}\n`);
    CreateFiles.write(`### ${topic}` + "\r\n");
    CreateFiles.write(details.text + "\r\n\n\n");
  }
}

printTopicDetails();
