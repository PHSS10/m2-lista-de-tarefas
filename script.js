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
    resultTitle = arr[i].title;
    resultType = arr[i].type;
    console.log(resultTitle)
    console.log(resultType)
    createTaskItem(resultTitle, resultType);
  }
}

function createTaskItem(title, type){
  const elementLi = document.createElement("li");
  const elementDiv = document.createElement("div");
  const elementSpan = document.createElement("span");
  const elementP = document.createElement("p");
  const elementButton = document.createElement("button");
  const elementImg = document.createElement("img");
  const elementUl = document.querySelector(".tasks__list");
  
  elementLi.appendChild(elementDiv);
  elementLi.appendChild(elementSpan);
  elementLi.appendChild(elementP);
  elementLi.appendChild(elementButton);
  elementDiv.appendChild(elementSpan);
  elementDiv.appendChild(elementP);
  elementButton.appendChild(elementImg);
  elementUl.appendChild(elementLi);
  
  elementLi.classList.add("task__item");
  elementDiv.classList.add("task-info__container");
  elementSpan.classList.add("task-type");
  elementSpan.classList.add("span-urgent");
  elementButton.classList.add("task__button--remove-task");
  elementImg.setAttribute("src", "./assets/trash-icon.svg");
  
  elementP.innerText = title;
  
  if(type == "Urgente"){
    elementSpan.classList.add("span-urgent");
  }
  else if(type == "Importante"){
    elementSpan.classList.add("span-important");
  }
  else if(type == "Normal"){
    elementSpan.classList.add("span-normal");
  }
  
  elementButton.addEventListener("click", function(){
    elementLi.remove()
  })
  
}
const form = document.querySelector(".form__container");
form.addEventListener("submit", function(event){
  event.preventDefault()
  
  const boxText = document.querySelector("#input_title");
  const boxPrioridades = document.querySelector(".form__input--priority--input__box");
  
  const newList = {title:boxText.value, type:boxPrioridades.value.toUpperCase()[0] + boxPrioridades.value.slice(1)}
  tasks.push(newList)
  renderElements(tasks)
})

renderElements(tasks)









