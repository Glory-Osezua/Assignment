//strings 1
const quoteStart = 'Dont judge each day by the harvest you reap';
const quoteEnd = 'but by the seeds that you plant';
const finalQuote1 = quoteStart + ' ' + quoteEnd;
console.log(finalQuote1);

//strings 2
const quote1 = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";
const quoteLength = quote1.length; 
const index = quote1.indexOf(substring); 
const revisedQuote = quote1.slice(0, index + substring.length) + "."; 
console.log("Quote Length:", quoteLength); 
console.log("Index Position:", index); 
console.log("Revised Quote:", revisedQuote);

//strings 3
const quote = "I dO nOT lIke gREen eGgS anD HAM";
const fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase();
const dislikedFood = "Yam and bread";
const updatedQuote = fixedQuote.replace("green eggs and ham", dislikedFood);
const finalQuote = updatedQuote + ".";
console.log(finalQuote);

//strings 4
const theorem = "Pythagorean theorem";
const a = 5;
const b = 8;
const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${hypotenuse}.`;
console.log(myString);
