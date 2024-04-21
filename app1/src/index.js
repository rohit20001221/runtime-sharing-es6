import printCount from "./counter.js";

import { MessageConsole } from "app2";

document.addEventListener("DOMContentLoaded", () => {
  printCount();

  setInterval(() => {
    MessageConsole("hello world");
  }, 5000);
});
