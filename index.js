const setiFrameText = () => {
  const frameQueryString = document
    .location
    .href
    .split("text=")[1];

  if (frameQueryString != undefined) {
    document
      .getElementById("frame__text")
      .src = `./contributions/${frameQueryString}`;
  }
}

setiFrameText();
