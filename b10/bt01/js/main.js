ELEMENT_ADD_TASK.addEventListener('click', function () {
  isOpenForm = !isOpenForm
  toggleForm(isOpenForm)
});

ELEMENT_SUBMIT.addEventListener('click', function () {
  let name = ELEMENT_INPUT_NAME.value
  let level = ELEMENT_INPUT_LEVEL.value
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
  renderUI(data)
  clearForm()
  setItem()
});

getItem()

ELEMENT_DELETE_ITEM.addEventListener('click', function () {
  console.log('aaaaaaaaaaaa')
});


// tach 2 phuong thuc local
// chuc nang xoa => hoi nguoi dung co muon => ok xoa




