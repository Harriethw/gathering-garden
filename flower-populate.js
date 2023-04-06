function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + 1 + min);
}

const getFlowers = () => {
  db.collection("flowers")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        addFlower(doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
      addLocalFlowers();
    });
};

const addLocalFlowers = () => {
  flowerData.forEach((flower) => {
    addFlower(flower)    
  });
};

const addFlower = (flower, id=null) => {
  const flowerContent = "&#9880;";

  const flowerWrapper = document.createElement("div");
  flowerWrapper.classList.add("flower__wrapper");
  const flowerElement = document.createElement("p");
  flowerElement.innerHTML = flowerContent;
  flowerElement.classList.add("flower__content");
  flowerWrapper.appendChild(flowerElement);
  flowerWrapper.setAttribute("tabindex", 0);

  //add tooltip text
  const tooltipText = document.createElement("span");
  tooltipText.classList.add("flower__text");
  tooltipText.innerHTML = flower.text;
  tooltipText.role = "tooltip";
  flowerWrapper.appendChild(tooltipText);

  //add random position
  flowerWrapper.style.left = `${randomInRange(0, window.innerWidth - 20).toString()}px`;
  flowerWrapper.style.top = `${randomInRange(0, 500).toString()}px`;

  //add id if present
  if (id) {
    flowerElement.setAttribute("id", id)
  }

  //add to bed
  const bedElement = document.getElementById("bed");
  bedElement.appendChild(flowerWrapper);
};

getFlowers();
