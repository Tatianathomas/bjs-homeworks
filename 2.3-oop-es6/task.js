'use strict';

// Задача 1
class Weapon  {
    constructor(object) {
        this.name = object.name;
        this.attack = object.attack;
        this.durability = object.durability;
        this._durability = object.durability;
        this.range = object.range;
    }

    takeDamage(damage) { // от соперника
        if ( (this.durability - damage) > 0 ) { 
            this.durability -= damage; 
        } else {
           this.durability = 0;
        }
    }

    getDamage() { //сопернику
        if (this.durability === 0) {
            return 0;
        } else if (this.durability >= this._durability * 0.3) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() { // не сломано ли 
        if (this.durability > 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: 200,
    range: 4,
});

const ax = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const stormStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);
arm.takeDamage(20);
console.log(arm.durability);
bow.takeDamage(20);
console.log(bow.durability); 

bow.takeDamage(200);
console.log(bow.durability);
console.log(bow.durability); 
console.log(bow.getDamage()); 

console.log(arm.durability); 
console.log(arm.getDamage()); 
console.log(bow.durability); 
console.log(bow.isBroken()); 

console.log(arm.durability); 
console.log(arm.isBroken());



// Задача 2

class Arm extends Weapon{
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}
class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}
class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}
class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}
class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}
class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}
class LongBow extends Bow {
    constructor(name, attack, range) {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}
class Ax extends Sword {
    constructor(name, attack, durability) {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}
class StormStaff extends Staff {
    constructor(name, attack, range) {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}



// Задача 3

class StudentLog {
    constructor(name) {
    this.name = name;
    this.marks = {}
    }
  
 getName() {
      return this.name;
 }
     
 addGrade(grade, subject) {
  if (grade == isNaN || grade > 5 || grade <= 0) {
  console.log(`Вы пытались поставить оценку ${grade}. Допускаются только числа от 1 до 5`) // проверка на то, является ли числом, не работает
  }
    this.marks.push(grade); //  не пушит grade
 }

 getAverageBySubject(subject) {
    for (let i = 0; i < grade.length; i++) {
        sum += grade;
        return sum / grade.length;
    }
    if (subject === 'indefined') {
        return 0;
    }
 }

}
const log = new StudentLog('Иван Петров');
console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));



const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.data)
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0


console.log(log.addGrade(4, 'algebra'));
// 1

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1