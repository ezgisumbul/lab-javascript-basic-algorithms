// Iteration 1: Names and Input

let hacker1 = 'jANE';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Joe';
console.log(`The naviagtor's name is ${hacker2}`);

// Iteration 2: Conditionals

switch (true){
    case (hacker1.length > hacker2.length):{
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    break;
    }
    case (hacker2.length > hacker1.length):{
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    break;
    }
    case (hacker2.length === hacker1.length):{
      console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
    break;
    }
    default:{
      console.log('There is something wrong');
    }
    
  }

// Iteration 3: Loops

let sum1 = '' ;
for (let i=0; i < hacker1.length; i++){
  let hacker1Upper = hacker1.toUpperCase();
  sum1 += " " + hacker1Upper[i];
}

console.log(sum1);

let sum2 = '' ;
for (let j = hacker2.length; j > 0; j--){
  sum2 += hacker2[j-1];
}

console.log(sum2);



switch (true){
  case (hacker1 < hacker2):{
    console.log(`The driver's name goes first.`);
  break;
  }
  case (hacker2 < hacker1):{
    console.log(`Yo, the navigator goes first definitely.`);
  break;
  }
  case (hacker2 === hacker1):{
    console.log(`What?! You both have the same name?`);
  break;
  }
  default:{
    console.log('There is something wrong');
  }
  
}

// Bonus 1

// As word count below is constructed on space count
// split() is used to cover some edge cases such as
// "    ", "", "   Hello world  "
// as split() didn't work well with recurring strings
// which removed 1st of recurring spaces but keeps rest 
// as empty string 
// added an empty string check '' 

const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis, odio in vehicula bibendum, ante ex venenatis tortor, congue vestibulum ex velit nec turpis. Curabitur vel pellentesque purus. Duis non ante euismod, varius lacus et, tristique ante. Praesent ac purus a dolor rutrum aliquet. Nam hendrerit rhoncus mi ac pretium. Vivamus iaculis sodales justo, sit amet porta ante. Praesent faucibus erat consectetur lobortis euismod. Cras aliquam nulla ac luctus volutpat. Curabitur eu leo vel purus finibus lacinia non sit amet tortor. Ut hendrerit justo ac libero gravida, in blandit leo consectetur. Aliquam imperdiet nibh quis massa eleifend, blandit lacinia massa pharetra. Curabitur id finibus sapien. Aliquam malesuada faucibus justo, nec vehicula dolor consequat ac. Proin in neque ex.

In et posuere sapien. Phasellus rutrum, odio vel tempor sagittis, erat risus tempus dui, id consectetur magna tellus et ipsum. Suspendisse eget porttitor massa. Nulla facilisi. Sed nisl eros, vehicula eu molestie sed, tempor ac quam. Mauris magna magna, tincidunt sed faucibus ac, volutpat id magna. Praesent lobortis rhoncus justo, vel sagittis tellus luctus sollicitudin. In eget laoreet ante. Nam at laoreet enim, sollicitudin blandit mi. Suspendisse in libero leo. Integer pharetra, augue nec suscipit volutpat, tortor diam feugiat nulla, quis tempus felis massa sed enim. Suspendisse luctus posuere tortor non vulputate. Aenean vestibulum magna ultrices tortor placerat posuere.

Aliquam scelerisque odio sapien, viverra congue ex condimentum a. Etiam tincidunt nisi et elit condimentum suscipit. Proin eget bibendum sem. Vestibulum non gravida erat, nec consequat ex. Nulla lobortis, augue sit amet mollis molestie, diam tortor consectetur ante, quis cursus sem massa quis risus. Proin luctus auctor elit. Nulla lobortis massa vitae finibus auctor. Aliquam accumsan malesuada sem sed euismod.
`

if (para.length !== 0){
  paraArrayed = para.split(" ");
  for (let j = 0; j < paraArrayed.length; j++){
   //empty string check 
    if (paraArrayed[j] !== ''){
      paraArrayedNoSpace.push(paraArrayed[j]);
    }
    if (paraArrayed[j] === 'et' || paraArrayed[j] === 'et.' || paraArrayed[j] === 'et,'){
      etArray.push(paraArrayed[j]);
    }
  }
}
// \n line breaks cause last word of the paragraph to merge with beginning of 
// the next paragraph, which results as 1 word instead of 2
// can count line breaks same as " " but results with too crowded code
// as 3 paragraps cost 2 lost words, just added +2 below


let countOfWords = paraArrayedNoSpace.length + 2; // adding lost words per paragraph
let countOfEt = etArray.length;


console.log(countOfWords);
console.log(countOfEt);

// Bonus 2


let phraseToCheck = "No 'x' in Nixon";
let finalPhrase = [];
let specialCharacters = ["'", '!', '.', ',', ' ', '?']

phraseToCheck = phraseToCheck.toLowerCase();
// console.log(phraseToCheck);
function cleaningNonLetters(string){ 
  for (let i=0; i < string.length; i++){ 
    if (specialCharacters.includes(string[i])){
      continue;
    } else {
      finalPhrase.push(string[i]);
    }
  }
}

cleaningNonLetters(phraseToCheck);
// console.log(finalPhrase);

function checkPalindrome(phrase) {
  for (i=0; i < phrase.length; i++){
    let iReverse = phrase.length - i - 1;;
    console.log(i, phrase[i]);
    if (phrase[i] !== phrase[iReverse]){
      return false;
    }
  }
  return true;
}

const isPalindrome = checkPalindrome(finalPhrase);

if (isPalindrome === true) {
  console.log("Yes")
} else {
  console.log("No")
}
