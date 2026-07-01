
function createPassword (passwordLength,includeLowerCaseChars,includeUpperCaseChars,includeNumbers,includeSymbols){
    
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCaseChars? lowerCaseChars : "";
    allowedChars += includeUpperCaseChars? upperCaseChars : "";
    allowedChars += includeNumbers? numbers: "";
    allowedChars += includeSymbols? symbols:"";

    if(passwordLength<=0){
        return `(password must be atleast 1)`;
    }
    
    if(allowedChars.length===0){
        return `(atleast one set of character must be selected)`;
    }
    
    for(let i= 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowerCaseChars = true;
const includeUpperCaseChars = true;
const includeNumbers = true;
const includeSymbols = false;

const password = createPassword(passwordLength,includeLowerCaseChars,includeUpperCaseChars,includeNumbers,includeSymbols);

console.log(`Generated Password: ${password}`);
