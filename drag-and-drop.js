function drag_start(event) {
  const style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData(
    "text/plain",
    parseInt(style.getPropertyValue("left"), 10) -
      event.clientX +
      "," +
      (parseInt(style.getPropertyValue("top"), 10) - event.clientY) +
      "," +
      event.target.getAttribute("data-item")
  );
}

function drag_over(event) {
  event.preventDefault();
  return false;
}

function drop(event) {
  let offset = event.dataTransfer.getData("text/plain").split(",");
  let dm = document.getElementsByClassName("draggable");
  dm[parseInt(offset[2])].style.left =
    event.clientX + parseInt(offset[0], 10) + "px";
  dm[parseInt(offset[2])].style.top =
    event.clientY + parseInt(offset[1], 10) + "px";
  event.preventDefault();
  return false;
}

const addDragToElements = () => {
  const dm = document.getElementsByClassName("draggable");
  for (const element of dm) {
    element.addEventListener("dragstart", drag_start, false);
    document.body.addEventListener("dragover", drag_over, false);
    document.body.addEventListener("drop", drop, false);
  }
};

const positionElements = () => {
  const draggableElements = document.getElementsByClassName("draggable");
  const draggableSpace = document.getElementById("draggable-space");
  const spaceLeft = draggableSpace.offsetLeft;
  const spaceTop = draggableSpace.offsetTop;
  const spaceHeight = draggableSpace.offsetHeight;
  const spaceWidth = draggableSpace.offsetWidth;

  draggableElements[0].style.left = spaceLeft + "px";
  draggableElements[0].style.top =
    spaceTop + (spaceHeight - draggableElements[0].offsetHeight) + "px";
  draggableElements[1].style.left = (spaceLeft + spaceWidth / 9) + "px";
  draggableElements[1].style.top = spaceTop + "px";
  draggableElements[2].style.left = (spaceLeft + spaceWidth / 9) + "px";
  draggableElements[2].style.top = spaceTop + spaceHeight / 4 + "px";
  draggableElements[3].style.left = (spaceLeft + spaceWidth / 9) + "px";
  draggableElements[3].style.top =
    spaceTop + (spaceHeight - draggableElements[3].offsetHeight) + "px";
  draggableElements[4].style.left = spaceLeft + spaceWidth / 2 + "px";
  draggableElements[4].style.top = spaceTop + spaceHeight / 9 + "px";
  draggableElements[5].style.left = spaceLeft + "px";
  draggableElements[5].style.top = spaceTop + spaceHeight / 9 + "px";
  draggableElements[6].style.left = spaceLeft + spaceWidth / 2 + "px";
  draggableElements[6].style.top = spaceTop + spaceHeight / 3 + "px";
};

positionElements();
addDragToElements();
