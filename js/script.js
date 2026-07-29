alert("welcome to nriit learning management system")
let heading = document.getElementById("welcome");
heading.innerHTML = "welcome future software engineer"
console.log("Heading element:",heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element:",msg)
function showmessage() {
    alert("Welcome to nriit learning management system ")
}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element:",heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click",function(){
    alert("welcome to javascript Event Handling");
});
let registerForm = documet.getElementById("regiterForm");
registerForm.addEventListener("submit",function (event){
    event.preventdefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").vlue;
    let password = document.getElementById("password").value;
    if (!name || !emaill || ! password){
        alert("please fill in all fields.");
        return;
    }
    alert("Registration successful!");
    console.log("Name:",name);
    console.log("Email",email);
    console.log("passord",password);});