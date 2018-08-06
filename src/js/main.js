const btn_add_list = document.getElementById('btn_add_list');

btn_add_list.addEventListener('click', () => {
  btn_add_list.style.display = 'none';
  input_add_list.style.display = 'block';
})

const btn_guardar = document.getElementById('btn_guardar');

btn_guardar.addEventListener('click', () => {
  let listName = document.getElementById('formGroupExampleInput').value;
  console.log(listName);
  formGroupExampleInput.style.display = 'none';
  btn_guardar.style.display = 'none';
  close_icon.style.display = 'none';
  document.getElementById('container_task').style.display = 'block';
  document.getElementById('list_name').innerHTML = listName;
})