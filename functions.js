/*If statements
If statments are a way for our applications to take different paths through our code or make choices about what kind of behavior our application takes based on certain conditions or values in our variables. The variable or value that we are testing to be true is known as the condition.*/
/*In Human: If this condition is true, do something.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
}
/*If/Else Statements
If/Else statments have the same behavior as our if statement above but we can add a secondary condition in the case that our if statement is not true to take another action instead. What if our light is already turned off when we flip the switch?

In Human: If this condition is true, do something, else if it is false, do something else.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
  else{
    isTurnedOn = true;
  }
}
/*For loops
Sometimes we want to loop over a collection of data stored in an Arrayor inspect each character in a String. Or we just want to execute a block of code a set number of times before continuing on with the execution of our program. For loops allow us to execute a block of code and at the end of each iteration of our for loop we will evaluate a condition to determine if our loop should run again similar to our if statment.

Our for loop is made up of 3 parts: 1. Variable initialization 2. Termination condition 3. Afterthought

In Human: While our variable i is less than the size of our Array retrieve each element in the Array. At the end of each loop add 1 to the current value of i.*/

var lotteryNumbers = [0, 23, 12, 55, 2, 44, 65];
for(var i = 0; i < lotteryNumbers; i++){
  var currentLotteryNumber = lotteryNumbers[i];
  checkWinningNumber(currentLotteryNumber);
}

function makeCrazyLongString(string){
  var outputString = "";
  for(var i =0; i < 100; i++){
    outputString = outputString.concat(string);
  }
}
/*makeCrazyLongString('taco');
Function - youGetTaco
Write a function that takes a single String parameter called action. If the value passed into our function is eat have the function return the String value EAT TACOS.
*/

/*my work*/function youGetTaco (action){
  if (action === "eat"){
  return "EAT TACOS";
  }
}
youGetTaco("eat");
console.log(youGetTaco("eat"));

/*class work*/
function youGetTaco(action){
	if(action=== "eat"){
		return "EAT TACOS";
	}
}

console.log("youGetTaco " + youGetTaco("eat"));

/*Function - isNumberGreaterThan
Write a function that takes two variables of type Number called first and secondrespectively. Return true if the first number is greater than the second.*/

/*my work*/
function isNumberGreaterThan(first, second){
  if (first>second === true){
    return true;
  }

}

isNumberGreaterThan(5,1);
console.log(isNumberGreaterThan(5,1));

/*class work*/
function isNumberGreatThan(first,second){
	if(first>second === true){
		return true;
	}
}

console.log("isNumberGreaterThan " + isNumberGreaterThan(5,3));
console.log("isNumberGreaterThan " + isNumberGreaterThan(3,5));

/*Function - isTrue
Write a function that takes in a Boolean value named val and have the function return whether the value is true.*/

/*my work*/
var val = 10>5;

function isTrue(val){
  if(val === true){
    return true;
  }

}

isTrue();
console.log("isTrue " + isTrue());

/*class work*/
function isTrue(val){
	if(val>20){
		return true;
	}
}
console.log("isTrue " + isTrue(21));

/*Function - isFalse
Write a function that takes in a Boolean value named val and have the function return whether the value is false.*/

/*my work*/
var val = 10<5;

function isFalse(){
  if(val === false){
    return false;
  }

}

isFalse();
console.log("isFalse " + isFalse());

/*class work*/
function isFalse(val){
	if(val<5){
		return false;
	}
}

console.log("isFalse " + isFalse(2));

/*Function - isEqual
Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.*/

var firstWord = "Hi";
var secondWordrespectively = "hI";

/*my work*/
function isEqual(firstWord, secondWordrespectively){
  if(firstWord === secondWordrespectively){
    return "AWWWWRIGHT";
  } else {
    return "Y U NO MATCH!";
  }
}

isEqual(firstWord, secondWordrespectively);
console.log("isEqual " + isEqual(firstWord,secondWordrespectively));

/*class work*/
function isEqual(firstWord, secondWordrespectively){
	if(firstWord===secondWordrespectively){
		return "AWWWWRIGHT";
	} else{
		return "Y U NO MATCH";
	}
}
console.log("isEqual "+ isEqual("hi","HO"));
console.log("isEqual "+ isEqual("hi","hi"));

/*Function - isNotEqual
Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.*/

/*my work*/
function isNotEqual(firstWord, secondWordrespectively){
  if(firstWord != secondWordrespectively){
    return 'AWWWWRIGHT';
  } else {
    return 'Y U MATCH!';
  }
}

isNotEqual(firstWord, secondWordrespectively);
console.log("isNotEqual " + isNotEqual("isNotEqual " + firstWord, secondWordrespectively));

var secondWordrespectively = "Hi";
console.log(isNotEqual("isNotEqual " + firstWord, secondWordrespectively));

/*class work*/
function isNotEqual(firstWord, secondWord){
	if(firstWord !== secondWord){
		return 'AWWWWRIGHT';
	} else {
		return 'Y U MATCH';
	}
}

console.log("isNotEqual " + isNotEqual("kitty", "Cat"));
console.log("isNotEqual " + isNotEqual("Cat", "Cat"));

/*Function - doubleEquals
Write a function that takes two variables of type Boolean called first and secondrespectively. Return true if both values are true otherwise return false.*/

/*my work*/
var first = "yes";
var secondrespectively = "yes";

function doubleEquals(first, secondrespectively){
  if (first === secondrespectively){
    return true;
  } else {
    return false;
  }
}

doubleEquals(first, secondrespectively);
console.log(doubleEquals(first, secondrespectively));

var first = "no";
console.log(doubleEquals(first, secondrespectively));

/*class work*/
function doubleEquals(first, second){
	if(first && second === true){
		return true;
	} else{
		return false;
	}
}
console.log("doubleEquals " + doubleEquals(2<1, 3<5));

/*Function - totalOver30
Write a function that takes three variables of type Number called first and second and third respectively. Return true if the sum of all values are greater than 30 otherwise return false.*/

/*my work*/
var first = 3;
var second = 2;
var third = 1;

function totalOver30(first, second, third){
  if(first + second + third > 30 === true){
    return true;
  } else {
    return false;
  }
}

totalOver30(first, second, third);
console.log(totalOver30(first,second,third));

/*var third = 35;
console.log(totalOver30(first, second, third));
*/

/*class work*/
function totalOver30 (first, second, third){
	if(first+second+third > 30){
		return "Over 30";
	} else {
		return "Under 30";
	}
}

console.log("totalOver30 " + totalOver30(10,11,12));

/*Function - totalUnderWhat
Write a function that takes four variables of type Number called first and second and third and fourth respectively. Return true if the sum of first, second and third are less than fourth otherwise return false.*/

/*my work*/
var fourth = 10;

function totalUnderWhat(){
  if(first + second + third < fourth){
    return true;
  } else {
    return false;
  }
}

totalUnderWhat(first,second,third,fourth);
console.log(totalUnderWhat(first,second,third,fourth));

var fourth = 0;
console.log(totalUnderWhat(first,second,third,fourth));

/*class work*/
function totalUnderWhat(first, second, third, fourth){
	if(first + second + third < fourth){
		return true;
	} else {
		return false;
	}
}

console.log("totalUnderWhat " + totalUnderWhat(1,2,3,4));
console.log("totalUnderWhat " + totalUnderWhat(1,2,3,10));

/*Function - looptoNumber
Write a function that takes in a Number value named limit and have the function write a for loop that loops the number of times of limit and console.log each number as the loop executes.*/

/*my work*/
var num = 5;

function looptoNumber(limit){
  for (var i=0; i < limit; i++){
    console.log(limit);
  }
}

looptoNumber(num);

/*class work*/
function looptoNumber(limit){
	for (var i=0; i< limit; i++){
		console.log(i);
	}
}
looptoNumber(10);

/*Function - showEachValue
Write a function that takes in a Array value named characters that has a sequence of single character String values and have the function write a for loop that loops for each number of elements in the Array and console.log each character as the loop executes.*/

/*my work*/
var names = ["a", "b", "c", "d"];

function showEachValue(character){
	for (var i=0; i < character.length; i++){
		console.log(character[i]);
	}
}

showEachValue(names);

var names = ["z", "y", "x", "w"];

function showEachValue(character){
	for (var i=0; i<character.length; i++){
		console.log(character[i]);
	}
}

showEachValue(names);

/*class work*/
var nameYa = ["Z", "Y", "X", "W"];

function showEachValue(characters){ //takes in array
	for (var i=0; i<characters.length; i++){
		console.log(characters[i]);
	}
}

showEachValue(nameYa);
/*Function - createArrayFromString
Write a function that takes a single variable of type String called word and write a for loop that creates an Array made up of each character in word except for A. We don't want no stinking A in our Array. Note: You will need to use the Array.push() method to complete this function.*/

/*my work*/
var word = ["A", "B", "C", "D", "E", "F", "G"];

function createArrayFromString(character){
	character.shift();
	for (var i=0; i<character.length; i++){
		console.log(character);
	}
}

createArrayFromString(word);

var word = ["A", "R", "R", "A", "Y"];

function createArrayFromString(character){
	character.splice(0,1);
	character.splice(2, 1);
	for (var i=0; i<character.length; i++){
		console.log(character[i]);
	}
}

createArrayFromString(word);

/*array.push = adds new item to an array*/
/*array.pop = removes the last item in an array*/
/*charAt() method = removes characters in a string based on its index*/

/*class work*/

var quote = "An apple a day, keeps the doc Away";
function createArrayFromString(word){
	var newArray = [];
	for(var i=0; i<word.length; i++){
		if(word[i].charAt()!== 'A' && word[i].charAt() !== 'a');{}
		newArray.push(word[i]);
			}
			return newArray; 

	}

console.log("createArrayFromString " + createArrayFromString(quote));

/*Function - greatSummator
Write a function that takes an Array with any number of type Number and write a for loop to add all numbers in the Array and return the sum.*/

/*my work*/
var numbers = [1,2,3,4,5];

function greatSummator(num){
		for (var i=0; i<num.length; i++){
		var arraySum = num[0]+num[1]+num[2]+num[3]+num[4]+num[5];
		return arraySum;
	}
}

/*class work*/

var numArray = [1,2,3,4,5];

function greatSummator(arr){
	var result = 0;
	for(var i=0; i<arr.length; i++){
		result +=arr[i]; //result = result + arr[i];
	}
	return result;
}

console.log(greatSummator(numArray));


/*Function - totalUnderWhatFor
Write a function that takes an Array with any number of type Number and second variable called total. Return true if the sum of all values in the Array are less than total otherwise return false.*/


/*Function - checkTrueValues
Write a function that takes an Array with any number of type Boolean values and write a for loop to call our isTrue function with each value as input and return true if all values return true from our isTrue function.*/

