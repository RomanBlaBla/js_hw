                    //task 1


const arr = ['Vasya','Petya','Alexey']
const removeUser = (arr,id)=>{
    arr.splice(id,1)
    return arr;
}
                    //task 2



const obj = { name: 'Vasya', age: 1}

const getAllKeys = (obj)=>{
    let arr = []
    for(key in obj){
        arr.push(key)

    }
    return arr;
    // return Object.keys(obj)
}

getAllKeys(obj)

                    //task3




const getAllValues=(obj)=>{
    let arr = []
    for(key in obj){
        arr.push(obj[key])
    }
    return arr;
    // return Object.values(obj)

}
getAllValues(obj) /// ["Vasya", 1]

                    //task4
const firstObj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}
const arrOfObj = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

function insertIntoarr(obj, id){
    const index = arrOfObj.findIndex(item => item.id == id)
    arrOfObj.splice(index,0,obj)
    return arrOfObj
}

console.log(arrOfObj)

console.log(insertIntoarr(firstObj, 2)) 

console.log(insertIntoarr(secondObj, 1)) 

                                //task5

class Candidate{
    constructor(candidate){
        Object.assign(this,candidate)
    }
    get state(){
        return this.address.split(',')[2];
    }

}
const candidate = new Candidate(candidateArr[0])
console.log(candidate.state) /// Colorado

                            //task6



const getCompanyNames = (arr)=>{
    return [...(new Set(arr.map((item)=>item.company)))];
}

console.log(getCompanyNames(candidateArr))


                        //task7



const getUsersByYear = (year) => {
    let newArr = (candidateArr.filter((item)=>item.registered.split('-')[0] == year))
    if(newArr.length == 0) return console.log('No one registered this year')
    return newArr.map((item)=>item._id);
}
console.log(getUsersByYear(2015))


                        //task8
                        
                        

const getCandidatesByUnreadMsg = (msg)=>{
    return candidateArr.filter(item=> item.greeting.split(' ')[5] == msg).map(item=>new Candidate(item));
}
console.log(getCandidatesByUnreadMsg(8))


                        //task9





const getCandidatesByGender = (gndr)=>{
return candidateArr.filter(item=> item.gender == gndr).map(item=>new Candidate(item));

}
console.log(getCandidatesByGender('male'))



                        //task 10