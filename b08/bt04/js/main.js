const element_box = document.getElementsByClassName("box")

// element_box.map((e) => {
//   console.log(e)
// })

let max = element_box[0].offsetHeight
for (let i = 0; i < element_box.length; i++) {
  if (max < element_box[i].offsetHeight) {
    max = element_box[i].offsetHeight
  }
}
console.log(max)

for (let i = 0; i < element_box.length; i++) {
  element_box[i].style.height = max + "px";
  element_box[i].style.backgroundColor = i % 2 == 0 ? "red" : "yellow";
}

