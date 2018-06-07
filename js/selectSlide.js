const selectSlide = (element) => {
  const mainElement = document.querySelector(`#main`);

  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export {selectSlide};
