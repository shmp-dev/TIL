const initList = [0, 0, 0, 0, 0, 2];
const inputList = [1]; // order
let fixList: number[] = [];
let inputIndex = 0;

// input の最初の値が1の場合は、input の値が連続している限り output に追加する
if (inputList[inputIndex] === 1) {
  fixList.push(inputList[inputIndex]);
  inputIndex++;

  inputList.forEach(() => {
    if (inputList[inputIndex - 1] + 1 === inputList[inputIndex]) {
      // 一つ前の要素の値と、現在の要素の値の差を比較する
      fixList.push(inputList[inputIndex]);
      inputIndex++;
    } else {
      return;
    }
  });
}

initList.forEach((initNum) => {
  inputList.forEach(() => {
    if (inputIndex < inputList.length && initNum >= inputList[inputIndex]) {
      fixList.push(inputList[inputIndex]);
      inputIndex++;
    } else {
      return;
    }
  });

  fixList.push(initNum);
});
// 正解は fixList = [1, 2, 0, 0, 3, 4, 5, 6, 0, 0, 7, 8, 9, 10]
console.log(fixList);
