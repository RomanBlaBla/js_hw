//Task 1
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
let arr=[]
let i = 0
for (let city in citiesAndCountries){
        arr[i] = (city +' - это ' + citiesAndCountries[city])
        i++
}
console.log(arr)

                            //Task 2

const amount = 12;
function getMassive(){
        let array = [];
        let k = 0
        for (let i = 0; i < (amount / 3);i++,k += 3){
                array[i]= []
                for (let j = 0 ; j < 3; j++){
                 array[i][j] = j + 1 + k
                }
                
        }
        return array
}
 console.log(getMassive())


                                //Task 3


function getArray(lang, day){

        const namesOfDays = {
                ru : ['Понедельник', 'Вторник', 'Среда','Четверг','Пятница','Суббота' , 'Воскресенье'],
                en : ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday' , 'Sunday'],
        }
        return namesOfDays[lang][day - 1];
}
console.log(getArray('en', 5))


                                //Task 4

let firstArray = [1003,1003,1003, 234214, 32, 32,52 ,-2, 3.32,3, 5, 2, 32,];
let newArray = [];
let j = 0

function getSumOfTwoMin(){
        for (i=0;i < firstArray.length;i++){
                for (let j = 1;j <= firstArray.length;j++){  //удаляем одинаковые числа
                        if(firstArray[i]=== firstArray[j+i]){
                                delete firstArray[j+i]
                        }
                }
                if(firstArray[i]>0 && (firstArray[i] % 1 === 0)){  // удаляем отрицательные числа и числа с плавающей запятой
                        newArray[j] = firstArray[i]
                        j++
                }
        }
        let firstMin= newArray[0]
        let secondMin
        for (i=0;i < newArray.length;i++){
                if (newArray[i]<=firstMin){          // находим первый минимум
                        secondMin = firstMin
                        firstMin = newArray[i]
                } else if(newArray[i]<secondMin){      // находим второй минимум
                        secondMin = newArray[i]
                }
        }
        return (firstMin + secondMin)
}
console.log(getSumOfTwoMin())



// [0, 0, 1, 0] ==> 2
// [0, 1, 0, 1] ==> 5
// [1, 0, 0, 1] ==> 9
// [0, 0, 1, 0] ==> 2
// [0, 1, 1, 0] ==> 6
// [1, 1, 1, 1] ==> 15
// [0, 0, 0, 1] ==> 1
// [1, 0, 1, 1] ==> 11

                                // Task 5
function getBinary(){
        let array = [0, 1, 1, 0,]
        let sum = 0
        for (i=0;i<array.length;i++){
                sum += (array[i] * (2 ** (array.length - i -1)))
        }
        return sum;
}
console.log(getBinary())