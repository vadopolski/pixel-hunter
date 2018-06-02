const templatesId = ['greeting', 'rules', 'game-1', 'game-2', 'game-3', 'stats'];

// task2
const main = document.querySelector(`main`);

// task3
let screenCount = 0;

const loadTemplate = (templatesId) => {
  const selector = 'template#' + templatesId;
  const currentNode = document.querySelector(selector).content.cloneNode(true);

  main.innerHTML = '';
  main.appendChild(currentNode);
};

//task4
loadTemplate(templatesId[screenCount]);

//task5
const previusScreen = () => {
  if (screenCount > 0) {
    loadTemplate(templatesId[--screenCount]);
  }
};

let nextScreen = () => {
  if (screenCount < templatesId.length) {
    loadTemplate(templatesId[++screenCount]);
  }
};

const uniKeyCode = (event) => {
  const key = event.which || event.keyCode;

  if (key == 37) previusScreen();
  if (key == 39) nextScreen();
};

//task6
const CLASS_VALUE = "arrows__btn";

let divElement = document.createElement("div");
divElement.setAttribute("class", "arrows__wrap");

let styleElement = document.createElement("style");
styleElement.innerHTML = ".arrows__wrap {position: absolute;top: 95px;left: 50%;margin-left: -56px;}" +
  ".arrows__btn {background: none;border: 2px solid black;padding: 5px 20px;}";

let buttonElement1 = document.createElement("button");
buttonElement1.setAttribute("class", CLASS_VALUE);
buttonElement1.setAttribute("onclick", "previusScreen()");
buttonElement1.innerHTML = "<-";


let buttonElement2 = document.createElement("button");
buttonElement2.setAttribute("class", CLASS_VALUE);
buttonElement2.setAttribute("onclick", "nextScreen()");
buttonElement2.innerHTML = "->";

divElement.appendChild(styleElement);
divElement.appendChild(buttonElement1);
divElement.appendChild(buttonElement2);
document.body.appendChild(divElement);
