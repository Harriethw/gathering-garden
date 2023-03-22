function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + 1 + min);
}

const generateFlowers = () => {
  const flowerContent = "&#9880;";
  flowerData.forEach((flower, index) => {
    //create flower element
    const flowerWrapper = document.createElement("div");
    flowerWrapper.classList.add("flower__wrapper");
    const flowerElement = document.createElement("p");
    flowerElement.innerHTML = flowerContent;
    flowerElement.classList.add("flower__content");
    flowerWrapper.appendChild(flowerElement);

    //add random position
    flowerWrapper.style.left = `${randomInRange(0, 200).toString()}px`;
    flowerWrapper.style.top = `${randomInRange(0, 400).toString()}px`; 

    //add to bed
    const bedElement = document.getElementById("bed");
    bedElement.appendChild(flowerWrapper);
  });
};

generateFlowers();
