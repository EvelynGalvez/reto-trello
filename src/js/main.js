const btn_add_list = document.getElementById('btn_add_list');

btn_add_list.addEventListener('click', () => {
  btn_add_list.style.display = 'none';
  input_add_list.style.display = 'block';
  container_task.style.display = 'none';
})

const btn_guardar = document.getElementById('btn_guardar');


btn_guardar.addEventListener('click', () => {
  let listName = document.getElementById('formGroupExampleInput').value;
  console.log(listName);
  container_list.style.display = 'none';
  container_task.style.display = 'block';
  list_task.style.display = 'none';
  list_name.innerHTML = listName;
  container_textarea.style.display = 'none';

  const addTask = document.getElementById('add_task');
  addTask.addEventListener('click', () => {
    console.log('boton añadir una tarea si funciona');
    container_textarea.style.display = 'block';
    list_task.style.display = 'block';
    add_task.style.display = 'none';

    const addTitleTask = document.getElementById('btn_añadir');
    addTitleTask.addEventListener('click', () => {
      console.log('boton añadir titulo si funciona');
      let text = document.getElementById('task').value;
      console.log('>>>>>>>>>>>>>>>>');
      console.log(text);
      task.value = '';
      let newDiv = document.createElement('div');
      let newTask = document.createTextNode(text);
      newDiv.appendChild(newTask);
      let containerElements = document.getElementById('list_task');
      containerElements.appendChild(newDiv);
    })
  })
})

