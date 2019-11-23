var password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=?"

userInput = Number(prompt("Choose number of charater for your password?")
)

alert(userInput + " charaters were chosen.")

console.log(userInput)

function generate() {

    let PW = "";
    for( var i = 0; i<= userInput; i++){

        PW += password[Math.floor(Math.random() * password.length)]
    }

    console.log(PW)
    return PW
}

document.querySelector("#generateBtn").onclick = function(){
    
    document.querySelector("#display").value = generate()


}



