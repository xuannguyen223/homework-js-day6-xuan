// COMMON FUNCTION
const getElement = (selector) => document.querySelector(selector);

function positiveNumberArray(arrayNumber) {
  let result = [];
  for (i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      result.push(arrayNumber[i]);
    }
  }
  return result;
}

const REGEX_NUMBER = /^[-0-9.,]*$/;
// Tạo mảng
let inputNumberArray = [];
const handleAddNumber = () => {
  let numberString = getElement("#number").value;
  if (!REGEX_NUMBER.test(numberString)) {
    getElement(
      "#inputNumberArrayResult"
    ).innerHTML = `<span class="text-red-500 font-bold">Nội dung bạn nhập chưa đúng.Vui lòng xem hướng dẫn và nhập lại!</span>`;
  } else {
    let numberArray = numberString.split(",").map(Number);
    inputNumberArray = inputNumberArray.concat(numberArray);
    getElement("#inputNumberArrayResult").innerHTML = `[ ${inputNumberArray} ]`;
    getElement(
      "#inputNumberArrayResult2"
    ).innerHTML = `[ ${inputNumberArray} ]`;
  }
};

// catch viewport
const resultDiv = getElement("#mainResult");
const stickyDiv = getElement("#sticky");

window.addEventListener("scroll", () => {
  const rect = resultDiv.getBoundingClientRect();
  if (rect.bottom < 0) {
    stickyDiv.classList.remove("hidden");
  } else {
    stickyDiv.classList.add("hidden");
  }
});

// 1. Tổng số dương
const sumNumber = () => {
  let result = 0;
  for (i = 0; i < inputNumberArray.length; i++) {
    if (inputNumberArray[i] > 0) {
      result += inputNumberArray[i];
    }
  }
  getElement(
    "#sumNumberResult"
  ).innerHTML = `Tổng các số dương có trong mảng: <span class="text-indigo-600 font-bold">${result}</span>`;
};

// 2. Đếm số dương
const countNumber = () => {
  let positiveNumbers = positiveNumberArray(inputNumberArray);
  getElement(
    "#countNumberResult"
  ).innerHTML = `Có: <span class="text-indigo-600 font-bold">${positiveNumbers.length}</span> số dương trong mảng`;
};

// 3. Tìm số nhỏ nhất
const minNumber = () => {
  let min = inputNumberArray[0];
  for (i = 0; i < inputNumberArray.length; i++) {
    if (inputNumberArray[i] < min) {
      min = inputNumberArray[i];
    }
  }
  getElement(
    "#minNumberResult"
  ).innerHTML = `Số nhỏ nhất trong mảng là: <span class="text-indigo-600 font-bold">${min}</span> `;
};

// 4. Tìm số dương nhỏ nhất
const minPositiveNumber = () => {
  let positiveNumber = positiveNumberArray(inputNumberArray);
  if (positiveNumber.length === 0) {
    getElement("#minPositiveNumberResult").innerHTML =
      "Không có số dương trong mảng. ";
  } else {
    let min = positiveNumber.sort(function (pt2, pt1) {
      return pt2 - pt1;
    });
    getElement(
      "#minPositiveNumberResult"
    ).innerHTML = `Số dương nhỏ nhất trong mảng là: <span class="text-indigo-600 font-bold">${min[0]}</span> `;
  }
};

// 5. Tìm số chẵn cuối cùng
const lastEvenNumber = () => {
  let evenNumber = -1;
  for (i = inputNumberArray.length - 1; i >= 0; i--) {
    if (inputNumberArray[i] % 2 === 0) {
      evenNumber = inputNumberArray[i];
      break;
    }
  }
  getElement(
    "#lastEvenNumberResult"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: <span class="text-indigo-600 font-bold">${evenNumber}</span> `;
};

// 6. Đổi chỗ
const changePosition = () => {
  let newArrayEx6 = [...inputNumberArray];
  let index1 = getElement("#index1").value * 1;
  let index2 = getElement("#index2").value * 1;
  if (index1 >= newArrayEx6.length || index2 >= newArrayEx6.length) {
    getElement("#changePositionResult").innerHTML =
      "Vị trí bạn nhập không có trong mảng. Vui lòng nhập lại!";
  } else {
    let valueIndex1 = newArrayEx6[index1];
    let valueIndex2 = newArrayEx6[index2];
    newArrayEx6[index1] = valueIndex2;
    newArrayEx6[index2] = valueIndex1;
    getElement(
      "#changePositionResult"
    ).innerHTML = `Mảng sau khi đổi: <span class="text-indigo-600 font-bold">[ ${newArrayEx6} ]</span> `;
  }
};

// 7. Sắp xếp tăng dần
const sortNumber = () => {
  let newArrayEx7 = [...inputNumberArray];
  newArrayEx7 = newArrayEx7.sort(function (pt2, pt1) {
    return pt2 - pt1;
  });
  getElement(
    "#sortNumberResult"
  ).innerHTML = `Mảng sau khi sắp xếp: <span class="text-indigo-600 font-bold">[ ${newArrayEx7} ]</span> `;
};

// 8. Tìm số nguyên tố đầu tiên
const firstPrimeNumber = () => {
  let containPrimeNumber = false;
  for (i = 0; i < inputNumberArray.length; i++) {
    if (inputNumberArray[i] % 1 !== 0 || inputNumberArray[i] < 2) {
      // dùng continue để skip qua phần tử ko phải số nguyên tố, check đến phần tử tiếp theo
      continue;
    }
    let isPrimeNumber = true;
    for (y = 2; y < inputNumberArray[i]; y++) {
      if (inputNumberArray[i] % y === 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      getElement(
        "#firstIntegerResult"
      ).innerHTML = `Số nguyên tố đầu tiên trong mảng: <span class="text-indigo-600 font-bold">${inputNumberArray[i]}</span> `;
      containPrimeNumber = true;
      break;
    }
  }
  if (!containPrimeNumber) {
    getElement("#firstIntegerResult").innerHTML =
      "Không có số nguyên tố trong mảng";
  }
};

// 9. Đếm số nguyên
// B1: tạo mảng
let newArrayEx9 = [];
const addNumber = () => {
  let number = getElement("#numberEx9").value * 1;
  newArrayEx9.push(number);
  getElement(
    "#newArrayResultEx9"
  ).innerHTML = `<span class="text-indigo-600 font-bold">[ ${newArrayEx9} ]</span>`;
};
// B2: đếm số nguyên
const countInteger = () => {
  let numberOfInteger = 0;
  for (i = 0; i < newArrayEx9.length; i++) {
    if (Number.isInteger(newArrayEx9[i])) {
      numberOfInteger++;
    }
  }
  getElement(
    "#countIntegerResult"
  ).innerHTML = `Có <span class="text-indigo-600 font-bold">${numberOfInteger}</span> số nguyên trong mảng`;
};

// 10. So sánh số lượng số âm và dương
const compare = () => {
  let positiveNumber = 0;
  let negativeNumber = 0;
  for (i = 0; i < inputNumberArray.length; i++) {
    if (inputNumberArray[i] > 0) {
      positiveNumber++;
    } else if (inputNumberArray[i] < 0) {
      negativeNumber++;
    } else {
    }
  }
  if (positiveNumber === negativeNumber) {
    getElement("#compareResult").innerHTML = "Số dương = Số âm";
  } else if (positiveNumber > negativeNumber) {
    getElement("#compareResult").innerHTML = "Số dương > Số âm";
  } else {
    getElement("#compareResult").innerHTML = "Số dương < Số âm";
  }
};
