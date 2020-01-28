// const car = {
//     Make: "Audi",
//     REG: "X20 GGM",
//     Color: "Black",
//     engineSize: 1.4,
//     transmission: "auto",
//     MOT: false,
//     doors: "5"
// }

// class Bunny {
//     constructor(name, legs) {
//         this._name = name;
//         this._hops = 0;
//         this._legs = legs;
//     }
//     get name() {
//         return this._name;
//     }
//     get hops() {
//         return this._hops;
//     }
//     get legs(){
//         return this._legs
//     }
//     increaseHops() {
//         this._hops++;
//     }
// }
// const rosie = new Bunny ("rosie", 2)
// const stuart = new Bunny("Stuart", 2)
// const lizzie = new Bunny("lizzie", 5, 6)
// rosie.increaseHops()
// console.log(rosie.name)
// console.log(stuart)
// console.log(lizzie)
// const car = {


// class CodeNation {
//     constructor(name){
//         this._name = name;
//         this._temp = true;
//         this._enjoyment = 100;
//     }
//     get name(){
//         return this.name;
//     }
//     get temp(){
//         return this._temp;
//     }
//     get enjoyment(){
//         return this._enjoyment;
//     }
//     happiness(){
//         this._enjoyment--;
//     }
// }

// class Student extends CodeNation{
//     constructor(name, favefood, age){
//         super(name);
//         this._favefood = favefood;
//         this._age = age;
//     }
//     get favefood(){
//         return this._favefood;
//     }
//     get age(){
//         return this._age;
//     }

// }


// const Georgia = new Student("Georgia", "Wagamama", "21")
// console.log(Georgia);

class Car{
    constructor(regnum){
    this._regnum = regnum;
    this._hours = 0;
    this._charge = 0.00;
    }
    get regnum(){
    return this._regnum;
    }
    get hours(){
    return this._hours;
    }
    get charge(){
    return this._charge;
    }
    increaseHours(){
    this._hours++;
    this._charge += 1.50;
    }
    }
    const pay = (reg, hr) => {
    const car = new Car(reg);
    for (i = 0; i < hr; i++){
    car.increaseHours();
    }
    console.log(`You need to pay £${car.charge} for ${car.hours} hours.`);
}

class Staff extends Car{
    constructor(regnum, staffID,){
        this._regnum = regnum;
        this._staffID = staffID;
    }
    get regnum(){
        return this._regnum;
    }
    get staffID(){
        return this._staffID;
    }
}
        const remainingCredits = (reg, hr) => {
            const car = new Car(reg);
            for (i = 0; i < hr; i++){
            car.increaseHours();
            }
            console.log(`You need to pay £${car.charge} for ${car.hours} hours.`);
        console.log()
        }

pay("X2O GGM", 5)

