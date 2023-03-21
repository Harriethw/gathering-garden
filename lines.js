function createLine(from, line) {
  var height = from.offsetHeight
  var top = from.offsetTop
  var left = 0
  var width = from.offsetLeft + from.offsetWidth / 2
  console.log('from', from)

  line.style.top = top + "px";
  line.style.left = "-" + left + "px";
  line.style.height = height + "px" ;
  line.style.width = width + "px";
}

createLine(
  document.getElementById("sphere-1"),
  document.getElementById("line-1")
);
createLine(
  document.getElementById("sphere-2"),
  document.getElementById("line-2")
);
createLine(
  document.getElementById("sphere-3"),
  document.getElementById("line-3")
);
createLine(
  document.getElementById("sphere-4"),
  document.getElementById("line-4")
);
createLine(
  document.getElementById("sphere-5"),
  document.getElementById("line-5")
);

