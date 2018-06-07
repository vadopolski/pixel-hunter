const mainElement = document.querySelector(`#main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export {selectSlide};
