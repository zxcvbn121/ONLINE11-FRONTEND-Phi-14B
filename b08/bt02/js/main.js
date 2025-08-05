const elementMain = document.getElementById('main')

const colorArr = ["yellow", "orange", "Blue", "Black", "pupple"]
let index = 0

const handleClickShow = () => {
  elementMain.style.opacity = 1
}

const handleClickHidden = () => {
  elementMain.style.opacity = 0
}
const handleClickChange = () => {
  elementMain.style.backgroundColor = colorArr[index]
  // if (index >= colorArr.length) {
  //   index = 0
  // } else {
  //   index++;
  // }

  index = index >= colorArr.length ? 0 : index + 1
}