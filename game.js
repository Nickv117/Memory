var data = [
  {
    name: "gnome",
    img: "assets/youvebeengnomed.png"
  },
  { name: "gnome", img: "assets/youvebeengnomedtwo.png" },
  { name: "yeaBoiii", img: "assets/theboi.jpg" },
  { name: "yeaBoiii", img: "assets/theboitwo.jpg" },
  { name: "knuckles", img: "assets/douknodaweh.png" },
  { name: "knuckles", img: "assets/douknodawehtwo.png" },
  { name: "chungus", img: "assets/god.png" },
  { name: "chungus", img: "assets/godtwo.png" },
  { name: "estate", img: "assets/free.gif" },
  { name: "estate", img: "assets/freetwo.gif" },
  { name: "swanson", img: "assets/daddy.jpg" },
  { name: "swanson", img: "assets/daddytwo.jpg" },
  { name: "Obi", img: "assets/mikewilllikethis.png" },
  { name: "Obi", img: "assets/mikewilllikethistwo.png" },
  { name: "cowboy", img: "assets/grandaddy.jpg" },
  { name: "cowboy", img: "assets/grandaddytwo.jpg" },
  { name: "suh", img: "assets/suhdude.gif" },
  { name: "suh", img: "assets/suhdudetwo.gif" }
]

var cardArray = []

data.forEach(item => {
  cardArray.push(
    `<div class="card"><div class="front"></div><div class="back"><img src="${item.img}"></div></div>`
  )
})

function shuffle(cardarray) {
  var currentIndex = cardarray.length,
    temproraryValue,
    randomIndex
  while (currentIndex !== o) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    ;(currentIndex -= 1), (temproraryValue = cardarrary[currentIndex])
    cardarray[currentIndex] = cardarray[randomIndex]
    cardarray[randomIndex] = temproraryValue
  }
}

// shuffle(cardArray)

$("#memory").html(cardArray)

$("#memory")
  .find(".card")
  .flip()
