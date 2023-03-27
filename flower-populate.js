function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + 1 + min);
}

const getFlowers = () => {
  db.collection("flowers")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        addFlower(doc.data())
      });
    })
    .catch((error) => console.log(error));
};

const addFlower = (flower) => {
  const flowerContent = "&#9880;";

  const flowerWrapper = document.createElement("div");
  flowerWrapper.classList.add("flower__wrapper");
  const flowerElement = document.createElement("p");
  flowerElement.innerHTML = flowerContent;
  flowerElement.classList.add("flower__content");
  flowerWrapper.appendChild(flowerElement);

  //add tooltip text
  const tooltipText = document.createElement("span");
  tooltipText.classList.add("flower__text");
  tooltipText.innerHTML = flower.text;
  flowerWrapper.appendChild(tooltipText);

  //add random position
  flowerWrapper.style.left = `${randomInRange(0, 200).toString()}px`;
  flowerWrapper.style.top = `${randomInRange(0, 400).toString()}px`;

  //add to bed
  const bedElement = document.getElementById("bed");
  bedElement.appendChild(flowerWrapper);
};

getFlowers();
