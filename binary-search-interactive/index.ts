const binarySearch = (elementsList: number[] | string[], elementToFind: number | string) => {
  let arrayIndexStart = 0;
  let arrayLastIndex = elementsList.length - 1;

  while (arrayIndexStart <= arrayLastIndex) {
    let center = Math.round((arrayIndexStart + arrayLastIndex) / 2);

    let guess = elementsList[center];

    if (guess === elementToFind) {
      return `The element position is ${center + 1}`;
    }

    if (guess > elementToFind) {
      arrayLastIndex = center - 1;
    } else {
      arrayIndexStart = center + 1;
    }
  }

  return `Element not found in the list!`
};

export default binarySearch;
