'use strict';
const person = {
    name: "Alice",
    languages: ["English", "French", "Spanish", "German"],
    greet: function() {
      // TODO: Modify this method to greet in a random language from the 'languages' array
  const randomIndex= Math.trunc(Math.random() * this.languages.length);
  console.log(randomIndex);
   const [selectedLanguage]=this.languages.slice(randomIndex,randomIndex+1);
// const selectedLanguage = this.languages[randomIndex]
   console.log(selectedLanguage);
if(selectedLanguage=='English'){
console.log('hello');
}
else if(selectedLanguage == 'French'){
    console.log('hi');
}else if(selectedLanguage == 'Spanish'){
    console.log('hola');
}else if(selectedLanguage == 'German'){
    console.log('hii');
}

    }

  };
  
  person.greet();

// Problem 2
  const studentInfo = ["Alice", 18, "A"];

// TODO: Use array destructuring to extract the information and print a message
const [name,age,grade] = studentInfo;
console.log(`Hello my name is ${name} I'm ${age} years old my grade is ${grade}`);

  