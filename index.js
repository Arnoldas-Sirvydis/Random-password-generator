
const chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const array = new Uint32Array(chars.length);
let password = "";
const passwordField = document.getElementById("password-field");
const generatePassword = document.getElementById("generate-password");
passwordField.setAttribute("readonly", true);




generatePassword.addEventListener("click", () => {
    if(passwordField.value != "") {
        passwordField.value = "";
        password = "";
    }
    crypto.getRandomValues(array)
    for(i = 0; i < 16; i ++) {
        password += chars[array[i] % chars.length]
    }
    passwordField.value = password;
});

passwordField.addEventListener("click", () => {
    if (navigator.clipboard) {
        /* clipboard API is supported */
        navigator.clipboard.writeText(passwordField.value)
    } else {
        /* clipboard API not supported */
        passwordField.select();
        document.execCommand("copy");
    }
    document.getElementById("popup-window").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("popup-window").style.visibility = "hidden";
    }, 3000); // after 3s the popup window will get hidden
});
