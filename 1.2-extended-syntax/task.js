    "use strict";
function getResult(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  let x1, x2;
  let array = [];
  if (D < 0) {
    return array;
  }
  if (D == 0) {
    x1 = -b / (2 * a);
    array = [x1];
  }
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    array = [x1, x2];
      }
  return array;
}


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    if (marks.length > 5) {
        console.log(`Количество оценок = ${marks.length}`);
        marks = marks.slice(0, 5);
    }
    let s = 0;
    for (let j = 0; j < marks.length; j++) {
        s = s + parseInt(marks[j]);
    }
    return s / marks.length;
  }


  function askDrink(name, dateOfBirthday) {
    if ( (new Date().getFullYear() - dateOfBirthday.getFullYear() ) > 18) {
      return `Не желаете ли олд-фэшн, ${name}?`;
    }
    else {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
  }