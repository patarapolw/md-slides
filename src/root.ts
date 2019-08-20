Array.from(document.getElementsByTagName("img")).forEach((n) => {
  const i = n.src.indexOf("@");
  if (i !== -1) {
    n.src = "https://patarapolw.github.io/md-slides/" + n.src.substr(i + 1);
  }
});