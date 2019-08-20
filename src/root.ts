Array.from(document.getElementsByTagName("img")).forEach((n) => {
  if (n.src.startsWith("@")) {
    n.src = "https://patarapolw.github.io/md-slides/" + n.src.substr(1);
  }
});