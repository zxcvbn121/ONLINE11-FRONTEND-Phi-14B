ELEMENT_ADD_TASK.addEventListener('click', function () {
  isOpenForm = !isOpenForm
  toggleForm(isOpenForm)
});

ELEMENT_SUBMIT.addEventListener('click', function () {
  let inputID = ELEMENT_INPUT_ID.value
  let name = ELEMENT_INPUT_NAME.value
  let level = ELEMENT_INPUT_LEVEL.value
  if (!inputID) {
    let object = {
      id: randomId(),
      name: name,
      level: level
    }
    if (name == '') {
      alert('vui long nhap thong tin')
      return
    }
    data.push(object)
  } else {
    let index = data.findIndex((item) => item.id == inputID)
    data[index].name = name
    data[index].level = level
  }
  renderUI(data)
  clearForm()
  setItem(data)
});

getItem()




// tach 2 phuong thuc local
// chuc nang xoa => hoi nguoi dung co muon => ok xoa




