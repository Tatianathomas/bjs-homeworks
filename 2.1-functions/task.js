"use strict";
function getSolutions(a, b, c) {
    let D = b**2 - 4 * a * c;
    if (D < 0) {
       return {D: D, roots: [] };
    }
    if (D === 0) {
        let x1 = -b / 2 * a;
        return {D: D, roots: [x1] };
    }
    if (D > 0) {
       let x1 = (-b + Math.sqrt(D)) / 2 * a;
       let x2 = (-b - Math.sqrt(D)) / 2 * a;
       return {D: D, roots: [x1, x2] };
    }
}
function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    }
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень ${result.roots[0]} = значение_корня`);
    }
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. ${result.roots[0]} = значение_корня_1, ${result.roots[1]} = значение_корня_2`);
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


function getAverageScore(data) {
    let size = Object.keys(data).length;
    console.log(size);
    let average = 0;
    for (let item in data) {
      average += getAverageMark(data[item]);
      data[item] = getAverageMark(data[item]);
    }
    if (size !== 0) {
      average = average / size;
    }
    data.average = average;
    return data;
  }
  
  console.log(getAverageScore(inputData));
  //считает среднее по одному предмету - массив marks
  function getAverageMark(marks) {
    if (marks.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }


  function getPersonData(secretData) {
    return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
  }
  
  function getDecodedValue(secret) {
    if (secret === 0) {
      return 'Родриго';
    }
    else if (secret === 1) {
      return 'Эмильо';
    }
  }
  
  console.log(getPersonData({aaa: 0, bbb: 0 }));
  console.log(getPersonData({aaa: 1, bbb: 0 }));
  console.log(getPersonData({aaa: 0, bbb: 1 }));
  console.log(getPersonData({aaa: 1, bbb: 1 }));

  //Expected $.firstName = undefined to equal 'Эмильо'.
  //Expected $.lastName = undefined to equal 'Родриго'.