//const btn_add_a_list = document.getElementById('btn_add_a_list');

// Para mostrar formulario ingreso nombre de lista y ocultar botón de 'Añadir una lista'
container_form.style.display = 'none';
function AddList() {
  btn_add_a_list.style.display = 'none';
  container_form.style.display = 'inline-block';

  // Para cerrar formulario de título lista
  close_icon.addEventListener('click', () => {
    container_form.style.display = 'none';
    btn_add_a_list.style.display = 'inline-block';
  })
}


const btnAddList = document.getElementById('btnAddList');

btnAddList.addEventListener('click', () => {
  let containerCards = document.getElementById('containerCards');
  let containerList = document.getElementById('containerList');
  let container_form = document.getElementById('container_form');
  container_form.style.float = 'left';
  containerList.style.float = 'left';
  containerCards.style.float = 'left';
  container_form.style.float = 'left';

  let listName = document.getElementById('listTitle').value;
  document.getElementById('listTitle').value = '';
  listName.value = '';
  let listTitle = document.createTextNode(listName);
  let containerTask = document.createElement('div');
  containerTask.setAttribute('class', 'containerTask');
  let taskTitle = document.createElement('p');
  taskTitle.setAttribute('class', 'nameList');
  let containerA = document.createElement('div');
  containerA.setAttribute('class', 'containerA');
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
  containerCards.appendChild(containerTask);

  contenedor.insertBefore(containerTask, containerCards);
  
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
    divTextArea.appendChild(textarea);
    divTextArea.appendChild(btnAddCard);
    divTextArea.appendChild(closeIcon);
    containerTask.appendChild(divTextArea);
    containerTask.removeChild(containerA);

    btnAddCard.addEventListener('click', () => {
      let valueTextArea = textarea.value;
      textarea.value = '';
      let newTask = document.createTextNode(valueTextArea);
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'newDiv');
      newDiv.appendChild(newTask);
      containerTask.appendChild(newDiv);
      containerTask.insertBefore(newDiv, divTextArea);
    })
  })
  contenedor.insertBefore(containerCards, containerList);
})

