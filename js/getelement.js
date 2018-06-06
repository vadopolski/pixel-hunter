const getElementFromTemplate = (markup) => {
  const res = document.createElement('div');
  res.innerHTML = markup;

  return res;
};

export {getElementFromTemplate};
