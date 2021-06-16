const searchCandidatesByPhoneNumber = phone => {
    return candidateArr.filter(user=>user.phone.replace(/\D/gm, '').includes(phone.replace(/\D/gm, '')))
}

console.log(searchCandidatesByPhoneNumber('5'))
console.log(searchCandidatesByPhoneNumber('43')) 
console.log(searchCandidatesByPhoneNumber('+1(869) 40')) 
console.log(searchCandidatesByPhoneNumber('43')) 
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82')) 



const getCandidateById = id => {
    const candidate = candidateArr.find(user=>user._id == id)
    const date = new Date(candidate.registered)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    candidate.registered =  `${day}/${month}/${year}`
    return candidate;
}



const sortCandidatesArr = sortBy => {
    if(!sortBy) return candidateArr
    return [...candidateArr].sort((a, b) =>{
        balOne = a.balance.replace(/\D/gm,'')
        balTwo = b.balance.replace(/\D/gm,'')
        if(sortBy == 'asc') return balOne - balTwo;
        if(sortBy == 'desc') return balTwo - balOne;
    })
}




const getEyeColorMap = () => {
    let obj= {}
    candidateArr.map(candidate=>{
        if(!obj[candidate.eyeColor])obj[candidate.eyeColor]=[]
        obj[candidate.eyeColor].push(candidate)
    })
    return obj;
}
console.log(getEyeColorMap())