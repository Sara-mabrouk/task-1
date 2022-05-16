const fs = require('fs');  
const students = require('./student')

const loadStudents = ()=>
{
    try
    {
    const data = fs.readFileSync('students.json').toString()
    return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }
}


const saveStudents = (students) =>{

    const data = JSON.stringify(students)
    
    fs.writeFileSync('students.json',data)
    }


const addStudents = (name, ID, marks) =>{
    const students=loadStudents()

    const duplicateID=students.filter ((data)=>{
        return data.ID===ID
    })
    console.log(duplicateID)

    if(duplicateID.length===0){
        let sum =0
        marks.forEach((degree) => {
        sum += degree
            console.log(sum)
        })

        students.push({
            name,
            ID,
            marks : sum
        })
        saveStudents(students)
console.log('saved successfully')

}
    
else {
    console.log ('error')
}

    

//     saveStudent(student)
//     console.log('student addedd')
// // }

// const removeData = (id) => {
//     const data = loadData();

//     const delete_id = data.filter((data) => {
//         return data.id !== id

//     })

//     console.log(data)
//     saveDate(data)
//     if (data.length !== delete_id.length) {
//         saveDate(delete_id)
//         console.log("removed")
//         console.log(delete_id)
//     } 
//     else {
//         console.log("not found ")

//     }
// }
// const loadstudents= () =>{
    
//     try{
// return JSON.parse(dataBuffer) 
// }
// catch{
//     return []}
// }

// const deletestudents=(_deleted)=>{
//     const Students =loadstudents()
//     const addtokeep=notes.filter((data)=>{
//         return ID!=== ID
//     })
//     console.log(addtokeep)
//     saveadd(addtokeep)

}

// const readstudents= () =>{
//     const read = loadNotes()
// const readadd= read.find((data)=>{
// return data.Name == Name
// })
// console.log(readadd)
// if(readadd){
// console.log(readadd.Name)
// }
// else{
// console.log('Not Found')
// }
// }

// const liststudents=()=>{
// const Students=loadstudents()
// student.forEach((data) => {
// console.log(data.liststudents)
// });
// }


module.exports = {
    addStudents
    // removeData,
    // readdata,
    // liststudents
}

// const saveNotes =(student) =>{
    
// }
