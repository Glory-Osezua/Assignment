// Array 1
let myArray = ["Pizza", "Burger", "Pasta"];
myArray[0] = "Rice";
myArray[1] = "Sharwama";
myArray.unshift("Ice Cream");
console.log(myArray);

// Array 2
let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let myArray2 = myString.split("+");
let arrayLength = myArray2.length;
let lastItem = myArray2[myArray2.length - 1];
console.log(myArray2);
console.log(arrayLength);
console.log(lastItem);

// Array 3
let myArray3 = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];
myArray3.pop();
myArray3.push("Barbie", "Jasmine");
myArray3 = myArray3.map((item, index) => `${item} (${index})`);
const myString3 = myArray3.join(" - ");
console.log(myString3);

// Array 4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);
const eBirds = birds.filter(bird => bird.startsWith("E"));
const eBirdsString = eBirds.join(",");
console.log(eBirdsString);
