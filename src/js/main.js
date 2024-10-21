// COMMON FUNCTION
const getElement = (selector) => document.querySelector(selector);

// Tạo mảng
let addNumberResult = [];
const handleAddNumber = () => {
  let number = getElement("#number").value * 1;
  addNumberResult.push(number);
  getElement("#addNumberResult").innerHTML = `[ ${addNumberResult} ]`;
  getElement("#addNumberResult2").innerHTML = `[ ${addNumberResult} ]`;
};

// 1. Tổng số dương
const sumNumber = () => {
  let result = 0;
  for (i = 0; i < addNumberResult.length; i++) {
    if (addNumberResult[i] > 0) {
      result += addNumberResult[i];
    }
  }
  getElement(
    "#sumNumberResult"
  ).innerHTML = `Tổng các số dương có trong mảng: <span class="text-indigo-600 font-bold">${result}</span>`;
};

// 2. Đếm số dương
const countNumber = () => {
  let result = 0;
  for (i = 0; i < addNumberResult.length; i++) {
    if (addNumberResult[i] > 0) {
      result++;
    }
  }
  getElement(
    "#countNumberResult"
  ).innerHTML = `Có: <span class="text-indigo-600 font-bold">${result}</span> số dương trong mảng`;
};

// 3. Tìm số nhỏ nhất
const minNumber = () => {
  let min = addNumberResult[0];
  for (i = 0; i < addNumberResult.length; i++) {
    if (addNumberResult[i] < min) {
      min = addNumberResult[i];
    }
  }
  getElement(
    "#minNumberResult"
  ).innerHTML = `Số nhỏ nhất trong mảng là: <span class="text-indigo-600 font-bold">${min}</span> `;
};

// 4. Tìm số dương nhỏ nhất
const minPositiveNumber = () => {
  let positiveNumber = [];
  for (i = 0; i < addNumberResult.length; i++) {
    if (addNumberResult[i] > 0) {
      positiveNumber.push(addNumberResult[i]);
    }
  }
  if (positiveNumber.length === 0) {
    getElement("#minPositiveNumberResult").innerHTML =
      "Không có số dương trong mảng. ";
  } else {
    let min = positiveNumber[0];
    for (i = 0; i < positiveNumber.length; i++) {
      if (positiveNumber[i] < min) {
        min = positiveNumber[i];
      }
    }
    getElement(
      "#minPositiveNumberResult"
    ).innerHTML = `Số dương nhỏ nhất trong mảng là: <span class="text-indigo-600 font-bold">${min}</span> `;
  }
};

// 5. Tìm số chẵn cuối cùng
const lastEvenNumber = () => {
  let evenNumber = -1;
  for (i = addNumberResult.length - 1; i >= 0; i--) {
    if (addNumberResult[i] % 2 === 0) {
      evenNumber = addNumberResult[i];
      break;
    }
  }
  getElement(
    "#lastEvenNumberResult"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: <span class="text-indigo-600 font-bold">${evenNumber}</span> `;
};

// 6. Đổi chỗ
const changePosition = () => {
  let newArrayEx6 = [...addNumberResult];
  // get index
  let index1 = getElement("#index1").value * 1;
  let index2 = getElement("#index2").value * 1;
  // get value
  let valueIndex1 = newArrayEx6[index1];
  let valueIndex2 = newArrayEx6[index2];
  // change value
  newArrayEx6[index1] = valueIndex2;
  newArrayEx6[index2] = valueIndex1;
  getElement(
    "#changePositionResult"
  ).innerHTML = `Mảng sau khi đổi: <span class="text-indigo-600 font-bold">[ ${newArrayEx6} ]</span> `;
};

// 7. Sắp xếp tăng dần
const sortNumber = () => {
  let newArray = [];
  newArray = addNumberResult.sort(function (pt2, pt1) {
    return pt2 - pt1;
  });
  getElement(
    "#sortNumberResult"
  ).innerHTML = `Mảng sau khi sắp xếp: <span class="text-indigo-600 font-bold">[ ${newArray} ]</span> `;
};

// 8. Tìm số nguyên tố đầu tiên
const firstInteger = () => {
  let firstInteger = -1;
  for (i = 0; i < addNumberResult.length; i++) {
    if (addNumberResult[i] % 1 === 0) {
      firstInteger = addNumberResult[i];
      break;
    }
  }
  getElement(
    "#firstIntegerResult"
  ).innerHTML = `Số nguyên đầu tiên: <span class="text-indigo-600 font-bold">${firstInteger}</span> `;
};

// 9. Đếm số nguyên
// B1: tạo mảng
let newArrayEx9 = [];
const addNumber = () => {
  let number = getElement("#numberEx9").value * 1;
  newArrayEx9.push(number);
  getElement(
    "#addNumberResultEx9"
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
  for (i = 0; i < addNumberResult.length; i++) {
    if (addNumberResult[i] > 0) {
      positiveNumber++;
    } else if (addNumberResult[i] < 0) {
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
