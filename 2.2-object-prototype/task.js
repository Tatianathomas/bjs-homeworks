function getAnimalSound(animal) {
    return (animal === undefined) ? null: animal.sound;
    //animal === undefined ? return null: return sound;  
//Эдгар, а почему не работает закоментированный код?
  }


function getAverageMark(marks) {
    if (marks.length === 0) {
      return 0;
    }
    let sum = 0; 
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
  }
    const average = sum / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {

  const now = Number(new Date());
  birthday = Number(new Date(birthday));
  const diff = now - birthday;
  const age = diff / (365.25 * 24 * 60 * 60 * 1000); 
  return age > 18;
}