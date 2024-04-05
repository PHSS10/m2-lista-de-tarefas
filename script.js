const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(arr){
  const elementUl = document.querySelector(".tasks__list");
  elementUl.innerHTML= "";
  
  for(let i = 0; i < arr.length; i ++){
    resultTasks = arr[i]
    
    createTaskItem(resultTasks);
  }
}

function createTaskItem(objeto){
  const elementDiv = document.createElement("div");
  const elementSpan = document.createElement("span");
  const elementP = document.createElement("p");
  const elementButton = document.createElement("button");
  const elementImg = document.createElement("img");
  const elementUl = document.querySelector(".tasks__list");
  
  const elementLi = document.createElement("li");
  elementUl.appendChild(elementLi)
  elementLi.appendChild(elementDiv);
  elementLi.appendChild(elementSpan);
  elementLi.appendChild(elementP);
  elementLi.appendChild(elementButton);
  elementDiv.appendChild(elementSpan);
  elementDiv.appendChild(elementP);
  elementButton.appendChild(elementImg);
  elementLi.classList.add("task__item");
  elementDiv.classList.add("task-info__container");
  elementSpan.classList.add("task-type");
  elementSpan.classList.add("span-urgent");
  elementButton.classList.add("task__button--remove-task");
  elementImg.setAttribute("src", "./assets/trash-icon.svg");
  
  elementP.innerText = objeto.title;
  
  if(objeto.type == "Urgente"){
    elementSpan.classList.add("span-urgent");
  }
  else if(objeto.type == "Importante"){
    elementSpan.classList.add("span-important");
  }
  else if(objeto.type == "Normal"){
    elementSpan.classList.add("span-normal");
  }
  
  elementButton.addEventListener("click", function(){
    const foundIndex = tasks.indexOf(objeto);
    if (foundIndex !== -1) {
        tasks.splice(foundIndex, 1);
        renderElements(tasks);
    }
});

  return elementLi
}

const form = document.querySelector(".form__container");
form.addEventListener("submit", function(event){
  event.preventDefault()
  
  const boxText = document.querySelector("#input_title").value;
  const boxPrioridades = document.querySelector(".form__input--priority--input__box").value;
  const newList = {title:boxText, type:boxPrioridades.toUpperCase()[0] + boxPrioridades.slice(1)};

  tasks.push(newList)
  renderElements(tasks);
  
})

renderElements(tasks)









