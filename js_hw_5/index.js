const counter = (() => {
    let result = 0 
    return (num) =>  result += num;
})();

console.log(counter(3))
console.log(counter(23))
console.log(counter(258))



const getUpdatedArr = (function (){
    let arr = []
    return (arg) => {
        if (!arg){
            return arr = [];
        }
        arr[arr.length] = arg;
        return arr;
    };

})();

console.log(getUpdatedArr(3)) // [3]
console.log(getUpdatedArr(5)) // [3, 5]
console.log(getUpdatedArr({name: 'Vasya'}))  // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr())  // []
console.log(getUpdatedArr(4))  // [4]


const getTime = (() => {
    let timeFirst = 0
    return ()=>{
        if (!timeFirst){
            timeFirst = new Date().getTime();
           
            return 'Enabled';
        }
        let timeSecond = new Date().getTime()
        const result = timeSecond - timeFirst;
        timeFirst = new Date().getTime();
        
        return Math.round(result/1000);
        
    }
    

    
})()

