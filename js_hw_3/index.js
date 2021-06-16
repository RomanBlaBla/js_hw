
class Employee{
    constructor(employee){
        Object.assign(this,employee)
        Object.defineProperty(this , 'fullInfo' ,{
            get : function(){
                return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}`;
            },
            set : function(fullInfo){
                for (let property in fullInfo) {
                    if (this.hasOwnProperty(property)){
                    this[property] = fullInfo[property]
                    }
                }
            },
            
        }); 
    }
    getFullName = function(){
        return `${this.name} ${this.surname}`; 
    }
}




const employeeObj = new Employee(employeeArr[0]);
console.log(employeeObj)
console.log(employeeObj.getFullName())
console.log(employeeObj.fullInfo)
employeeObj.fullInfo = {name: 'Вася',email: 'fgdjgfdjg', salary: 9000,}
console.log(employeeObj)




let createEmployesFromArr = (arr) => {
    let array = []
    for (let employee of arr){
        array[array.length] = new Employee(employee)
    }
    return array;
};
const emplyeeConstructArr = createEmployesFromArr(employeeArr)
console.log(emplyeeConstructArr)


const getFullNamesFromArr = (arr) => {
    let fullNameArr = []
    for(let employee of arr){
        fullNameArr[fullNameArr.length] = employee.getFullName()
    }
    return fullNameArr;
}
    
console.log(getFullNamesFromArr(emplyeeConstructArr))


const getMiddleSalary = (arr) => {
    let middleSalary = 0
    for (employee of arr){
        middleSalary += employee.salary 
    }
    middleSalary /= arr.length;
    return Math.floor(middleSalary)
}

console.log(getMiddleSalary(emplyeeConstructArr))


const getRandomEmployee = (arr) => {
    return arr[Math.floor(Math.random() * arr.length )];
    }
    
console.log(getRandomEmployee(emplyeeConstructArr))
