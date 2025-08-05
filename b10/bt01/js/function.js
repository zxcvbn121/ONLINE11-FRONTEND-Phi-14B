const toggleForm = (checkForm) => {
  if (checkForm) {
    ELEMENT_FORM.classList.remove('hidden')
    ELEMENT_ADD_TASK.style.backgroundColor = 'red';
    ELEMENT_ADD_TASK.innerHTML = 'Close';
  }
  else {
    ELEMENT_FORM.classList.add('hidden')
    ELEMENT_ADD_TASK.style.backgroundColor = '#39c0ed';
    ELEMENT_ADD_TASK.innerHTML = 'Add Task';
  }
}

const randomId = (length = 12) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const renderUI = (data) => {
  let xHtml = ''
  data.map((item, index) => {
    xHtml += `
     <tr>
        <td>${index + 1}</th>
        <td>${item.name}</td>
        <td><span class="badge bg-danger">${item.level}</span></td>
        <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger" id="btn-delete">Delete</button>
        </td>
    </tr>
    `
  })
  ELEMENT_BODY.innerHTML = xHtml
}

const clearForm = () => {
  ELEMENT_INPUT_NAME.value = ''
  ELEMENT_INPUT_LEVEL.value = 'Small'
}

const setItem = () => {
  localStorage.setItem('phi', JSON.stringify(data))
}

const getItem = () => {
  let newDataString = localStorage.getItem('phi')
  data = JSON.parse(newDataString || "[]")
  renderUI(data)
}
