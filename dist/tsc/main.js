// src/main.js
import answer from "the-answer";
import axios from "axios";
import data from "./data.json";
var list = data;
export default (function () {
    console.log("the answer is ".concat(answer, " sdf"));
    axios.get("/ab/c").then(console.log);
    console.log(list);
});
