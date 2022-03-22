// src/main.js
import answer from "the-answer";

import axios from "axios";

import data from "./data.json";

const list: { name: string; age: number }[] = data;

export default () => {
  console.log(`the answer is ${answer} sdf`);
  axios.get("/ab/c").then(console.log);
  console.log(list);
};
