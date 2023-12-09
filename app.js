rotatingWords = document.getElementById("rotary")

rotatingWords.innerHTML = ["fun", "interesting", "exciting"]

if (rotatingWords === " ") {
    rotatingWords = rotatingWords.innerHTML[0]
}