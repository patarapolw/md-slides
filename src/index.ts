import { Dree } from "dree";
import DreeBrowser from "dree-browser";
import "dree-browser/dist/dree-browser.min.css";

declare const DREE: Dree;

const db = new DreeBrowser(document.getElementById("App")!, DREE, {
  on: {file(d) {
    if (/\.(md|pug)$/.test(d.name)) {
      const url = new URL("https://reveal-md.herokuapp.com/");
      url.searchParams.append(
        "q", `https://raw.githubusercontent.com/patarapolw/md-slides/master/slides/${d.relativePath}`);
      open(url.href, "_blank");
    }
  }}
})
