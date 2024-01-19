const favFruit  = 'apple';
// find string size 
console.log(favFruit.length);
// find index of character from string
console.log(favFruit.indexOf('p'));
// find last index of charcter from string
console.log(favFruit.lastIndexOf('p'));
// slice the string by index
// will display from index 1
console.log(favFruit.slice(1));
// will display from string to index before specifiec last index i.e 0 to 2 index.
console.log(favFruit.slice(0,3));
// will display from index 1 to (lastindex-1)
console.log(favFruit.slice(1,-1));

// Example
// if the word has a,e,i,o,u in the start it will be vowel 
// otherwise Not a vowel.

const word="umbrella";
const letter = word.slice(0,1);
console.log((letter==='a'||letter==='e'||letter==='i'||letter==='o'||letter==='u')
?`${word} is a vowel`:`${word} is not a vowel`);

// How string method works behind the scenes
// String covert as object and perform methods and covert back to string

// will display string in lowercase,uppercase
console.log('Noori'.toLowerCase());
console.log('Noori'.toUpperCase());

//fix capitalization in name
const nameStr= "nooriNisha beGam \n";
console.log(nameStr[0]);
const nameStr1 = nameStr.toLowerCase();
const spaceInd = nameStr.indexOf(' ');
console.log(spaceInd)
const nameStr2 = nameStr1[0].toUpperCase() + nameStr1.slice(1,10) +' '
+ nameStr1[spaceInd +1].toUpperCase()+nameStr1.slice([spaceInd+2],-1);
console.log(nameStr2);

// Modify email
const email = " noORi@gMail.com\n"
const newEmail = email.toLowerCase().trim();
console.log(newEmail);
const newEmail1 = email.toLowerCase().trimStart();
console.log(newEmail1);
const newEmail2 = email.toLowerCase().trimEnd();
console.log(newEmail2);

// includes method
const stmnt = (stmnt) =>{
 console.log(stmnt.includes('pulse')?'Wrong Statement':"True Statement");
}

stmnt('Jammu loves apple');
stmnt('Jammu loved red color');
stmnt('Jammu loves pulse')

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
  
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are NOT allowed on board');
    } else {
      console.log('Welcome aboard!');
    }
  };
  
  checkBaggage('I have a laptop, some Food and a pocket Knife');
  checkBaggage('Socks and camera');
  checkBaggage('Got some snacks and a gun for protection');
  
// replace method
const indMoney = '1,23,000R'
const usMoney = indMoney.replace(',','').replace('R','D');
console.log(usMoney)

// replaceall in regex
const sent = 'hdnny'.replace(/d/g,'a').replace(/n/g,'p');
console.log(sent)

const sent1 = 'happy spot,safe spot'.replace(/spot/g,'place');
console.log(sent1)

// replaceAll method
const sent2 = "happy spot,safe spot".replaceAll("spot","place");
console.log(sent2);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
  console.log(announcement.replaceAll('door','gate'))

// Split and join
// split splits string by seperator and gives an array
console.log('a+very+nice+String'.split('+'));
// split by space
console.log('country india'.split(' ')) 
console.log('country india'.split(''))

const [fName,lName]="sara smith".split(' ');
console.log(fName,'----',lName);

const newName = ['Ms.',fName,lName.toUpperCase()].join(' ');
console.log(newName);

const newArr=[];
const newArr1=[];
const capitalizeName = function(name){
    const names =name.split(' ');
    for(const n of names){
        // both will do same function
        newArr.push(n[0].toUpperCase()+n.slice(1));
        newArr1.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(newArr.join(' '));
    console.log(newArr1.join(' '));
}
capitalizeName('jessica ann smith davis\n');
capitalizeName('jonas schmedtmann');

// padStart ,padEnd method
const fruitName = 'an apple';
// total length is 10 put * according to given string to get total length
console.log(fruitName.padStart(10,'*').padEnd(13,'*'));
console.log('banana'.padStart(10,'🍌').padEnd(15,'*'));

// mask credit card
const maskCreditCard = function(number){
     const str = number + '';
     const last4dig = str.slice(-4);
     return last4dig.padStart(str.length,'*');
}

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// repeat method
const msg="Welcome 🙏 \n";
// specify how many times message repeat
console.log(msg.repeat(4));

// example
const appleCount = (count) =>{              
    console.log(count>1 ?`${count} Apples ${'🍎'.repeat(count)}`
    :`${count} Apple ${'🍎'.repeat(count)}`);
}
appleCount(10);




  
