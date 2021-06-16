class Student{
    constructor(enrollee){
        for(let  key in enrollee){
            this [key]= enrollee[key]
        }
        this.id = Student.id++;
        this.isSelfPayment = null;
        this.sortBudgetStudents()

    }
    static id = 1;
    static studentList = [];
    
    sortBudgetStudents(){
        Student.studentList[Student.studentList.length] = this
        Student.studentList.sort(function(a, b) {
            return b.ratingPoint-a.ratingPoint || b.schoolPoint-a.schoolPoint;
          });
        for (let i = 0; i < Student.studentList.length;i++){
            if(i  < 5 && Student.studentList[i].ratingPoint >=800){
                Student.studentList[i].isSelfPayment = false;
            }else{Student.studentList[i].isSelfPayment = true}
           
        }    
    return;
    }
}
let createStudentsFromArr = (arr) => {
    let array = []
    for (let enrollee of arr){
        array[array.length] = new Student(enrollee)

    }
    return array;
};
const studentConstructArr = createStudentsFromArr(studentArr)
console.log(studentConstructArr)

class CustomString{
    reverse(string){
        let reverseString = ''
        for(let i = (string.length-1);i >= 0;i--){
            reverseString += string[i]
        }
        return reverseString;
    }
    ucFirst(string){
        let newString = ''
        for (let i=0 ; i < string.length ;i++){
            (i == 0) ? newString += string[i].toUpperCase() : newString += string[i]
        }
        return newString;
    }
    ucWords(string){
        let newString = ''
        for (let i=0 ; i < string.length ;i++){
            if (i == 0 || string[i-1] === ' '){
                newString += string[i].toUpperCase()
                }else{ newString += string[i]

                }
        }
        return newString;
    }
}
const myString = new CustomString();

console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));
