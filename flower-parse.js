const generateFlowers = (json) => {
    const flowerContent = '&#9880;'
    const flowerContainer = document.createElement('div')
    const flowerElement = document.createElement('p')
    flowerElement.innerHTML = flowerContent
    flowerElement.classList.add("flower__content")
    flowerContainer.appendChild(flowerElement)

    const bedElement = document.getElementById('bed')
    bedElement.appendChild(flowerContainer)
}

generateFlowers()