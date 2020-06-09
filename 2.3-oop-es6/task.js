'use strict';

/* // Задача 1
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

class LongBow extends Bow {
    constructor(name, attack, range) {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}
class Axe extends Sword {
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

*/

// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = []
    }
    
    getName() {
        return this.name;
    }
     
    addGrade(grade, subject) {
        if (isNaN(grade) || grade > 5 || grade < 1) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            const subjectRecords = this.marks.find(elem => elem['subject'] === subject);
            if (subjectRecords) {
            return subjectRecords.grades.length;
            } else {
            return 0;
            } 
        }
        else {
            if ( !(this.marks.find(elem => elem['subject'] === subject))) {
                const newRecord = {
                    subject: subject,
                    grades: [grade]
                  }
                this.marks.push(newRecord);
                return newRecord['grades'].length
            }   
            
            else {
                for (let record of this.marks) {
                    if (record['subject'] === subject) {
                        record['grades'].push(grade);
                    }
                    return record['grades'].length; 
                }
            }   
        }
    } 

    getAverageBySubject(subject) {
        let arr = this.marks.filter(function(sub) {
            return (sub['subject'] === subject); 
        }); 
        if (!arr) {
            return 0;
        }
        let sum = 0;
        console.log(arr[0])
        console.log(arr[0].grades)
        for (let i = 0; i < arr[0].grades.length; ++i) {
            sum += arr[0].grades[i]; 
        } return sum / arr[0].grades.length; 
    }

    getTotalAverage() {
        if (this.marks.length === 0) {
            return 0;
        }        
        let sum = 0;        
        for (let record of this.marks) {
            sum += this.getAverageBySubject(record['grades']);
        }
        return sum / record['grades'].length;
    }     
}    
const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry')); 
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage()); 



