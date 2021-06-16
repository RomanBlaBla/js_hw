for (let i = 0; i < 10; i++){
    if (i % 3 == 0){
            console.log('fiz buz')

    } else if (i % 2 == 0) {
            console.log('fiz')
    } else if (i % 2 !== 0) {
            console.log('buz')
    }


}

//          2 Task

let fact = 3
let formula = 1
for (fact; fact>0;fact--){
formula *= fact
}
console.log(formula)





//              Task 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let resultMinimal = weeksAmount * consumptionPerWeek/sheetsInReamPaper


resultMinimal = resultMinimal - (resultMinimal % 1) + 1

console.log(resultMinimal)


//                   Task 4
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = prompt();

const roomsInPorch = floors * roomsOnFloor
let porch = roomNumber/roomsInPorch
let floor = (roomNumber%roomsInPorch) / roomsOnFloor
if ((porch % 1) !== 0){
 porch = porch - (porch % 1) + 1
}
if((floor % 1) !==0){
 floor = floor - (floor % 1) + 1
} else if (!((roomNumber%roomsInPorch) % 3)) {
} else {
 floor = 9
}



console.log('Квартира:' + roomNumber + ' находится в ' + porch +  ' подъезде на ' + floor + ' этаже ')










//                Task 5
const medianNumber =  8
let minusSign = '-'
let hashSign = '#'
let minusNumber = medianNumber - 1
let hashNumber = 1

for (let i = 1; i <= medianNumber; i++, minusNumber--, hashNumber +=2) {
let stroka =""
for (let i = minusNumber;i >= 1;i--) {
        stroka += minusSign
}      
for (let i = 1;i <= hashNumber;i++) {
        stroka += hashSign
}
for (let i = minusNumber;i >= 1;i--) {
        stroka += minusSign
}
console.log(stroka)
}