const btn_add_a_list = document.getElementById('btn_add_a_list');

btn_add_a_list.addEventListener('click', () => {
  btn_add_a_list.style.display = 'none';
  container_form.style.display = 'block';

  // Para cerrar formulario de título lista
  close_icon.addEventListener('click', () => {
    container_form.style.display = 'none';
    btn_add_a_list.style.display = 'block';
  })
})

const btnAddList = document.getElementById('btnAddList');

btnAddList.addEventListener('click', () => {
  let containerList = document.getElementById('containerList');
  containerList.style.float = 'left';
  container_form.style.float = 'left';

  let listName = document.getElementById('listTitle').value;
  listName.value = '';
  let listTitle = document.createTextNode(listName);
  let containerTask = document.createElement('div');
  containerTask.setAttribute('class', 'containerTask');
  let taskTitle = document.createElement('p');
  taskTitle.setAttribute('class', 'nameList');
  let containerA = document.createElement('div');
  let linkAddTask = document.createElement('a');
  let iconAdd = document.createElement('i');
  iconAdd.setAttribute('class', 'fas fa-plus');
  linkAddTask.setAttribute('class', 'AddTask');
  let textAddTask = document.createTextNode(' Añada una tarjeta');
  linkAddTask.appendChild(iconAdd);
  linkAddTask.appendChild(textAddTask);
  linkAddTask.title = '  Añadir una tarjeta';
  linkAddTask.href = '#';
  containerA.appendChild(linkAddTask);
  taskTitle.appendChild(listTitle);
  containerTask.appendChild(taskTitle);
  containerTask.appendChild(containerA);

  contenedor.insertBefore(containerTask, containerList);
  
  linkAddTask.addEventListener('click', () => {
    
    let divTextArea = document.createElement('div');
    let textarea = document.createElement('textarea');
    textarea.setAttribute('class', 'textarea');
    textarea.setAttribute('placeholder', 'Introduzca un título para esta tarjeta...');
    let btnAddCard = document.createElement('button');
    btnAddCard.setAttribute('class', 'btn btn-success btnAddCard');
    let pTextBtnAddCard = document.createElement('p');
    pTextBtnAddCard.setAttribute('class', 'pTextBtnAddCard');
    let textBtnAddCard = document.createTextNode('Añadir tarjeta');
    let closeIcon = document.createElement('i');
    closeIcon.setAttribute('class', 'fas fa-times');
    pTextBtnAddCard.appendChild(textBtnAddCard);
    btnAddCard.appendChild(pTextBtnAddCard);
    containerTask.appendChild(textarea);
    containerTask.appendChild(btnAddCard);
    containerTask.appendChild(closeIcon);
    containerTask.removeChild(containerA);

    btnAddCard.addEventListener('click', () => {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'newDiv');
      let valueTextArea = textarea.value;
      textarea.value = '';
      let newTask = document.createTextNode(valueTextArea);
      newDiv.appendChild(newTask);
      containerTask.appendChild(newDiv);
      containerTask.insertBefore(newDiv, textarea);
    })
  })
})

