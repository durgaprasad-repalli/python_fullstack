console.log("Hello world")
let student_name = "Sriram"
console.log("Student name is:"+student_name)
let student_age = 21
let student_group = "python full stack"
console.log("student age is:"+student_age,"course name is:"+student_group)
let fee = 10000
let discount = 10
let discounted_fee = fee - (fee*discount/100)
console.log("Discounted fee is:"+discounted_fee)

let age=20
if (age>=18){
    console.log("eligible for admission")
}
else{
    console.log("not eligible for admission")
}
for(let i=1;i<=5;i++){
    console.log("iteration number:"+i)
}
const pi = 3.14
console.log("value of pi is:"+pi)
let student ={
    name = "sriram",
    age = 21,
    course = "python fullstack",
    fee: 10000
}
console.log("student details:",student)
 
function greetstudent(name){
    console.log("Hello"+name+",Welcome To Nriit Learning Management System")

}
greetstudent(student_name)
