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