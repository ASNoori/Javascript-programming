'use strict';

// ------------- Refer how async javascript works behind the scenes----------
// script for opening an image using js only
// Create an image element
const img1 = new Image();
img1.style.maxWidth = '100%';

// Set the source of the image to the file in the same folder
img1.src = "./asyncbts.png"; 
// Replace with your actual image filename
// Append the image element to the document body
document.body.appendChild(img1);
///////////////////////////////////////
// First AJAX Call: XMLHttpRequest

// const getCountryData = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://countries-api-836d.onrender.com/countries/
//     ${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
    
//         const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//       `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//       });
// }

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

/////////////////////////// My notes for Promises ///////////////////////////////

// Promise is a object used as a placeholder for future value of asynchronous operation.
// Promise is a container of future value

// Promise used to avoid confusion of nested callback

// promise introduced in es6

// const getCountryData = function(country){
//     fetch(`https://countries-api-836d.onrender.com/countries/${country}`)
//     // fetch returns promise
//     .then(response => response.json())
//     // then returns another promise
//     .then(data => renderCountry(data[0]))
//     .catch(err =>{

//     })
// };

// getCountryData('Portugal');

// we use catch to display error . catch iteself return promise
// finally - will work neither promise fullfilled or not. finally only will work if catch return promise,
// finally only works with promise


///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsdfdef';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*
const getCountryData = function (country) {
    // Country 1
    getJSON(
      `https://restcountries.eu/rest/v2/name/${country}`,
      'Country not found'
    )
      .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
  
        if (!neighbour) throw new Error('No neighbour found!');
  
        // Country 2
        return getJSON(
          `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
          'Country not found'
        );
      })
  
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  };
  
  btn.addEventListener('click', function () {
    getCountryData('portugal');
  });
  
  // getCountryData('australia');
*/
  
  ///////////////////////////////////////
  // Coding Challenge #1
  
  /* 
  In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
  
  Here are your tasks:
  
  PART 1
  1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
  2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
  The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
  3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
  4. Chain a .catch method to the end of the promise chain and log errors to the console
  5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
  
  PART 2
  6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
  7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
  
  TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
  TEST COORDINATES 2: 19.037, 72.873
  TEST COORDINATES 2: -33.933, 18.474
  
  GOOD LUCK 😀
  */
  const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };
  const whereAmI = function(lat,lng){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    // fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res=>{
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
        return res.json();
    })
    .then(data =>{
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`)
        // console.log(`You are in ${data.city}, ${data.country}`)
        // return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
       return fetch(`https://restcountries.com/v2/alpha/${data.countryCode}`)
        // return fetch(`https://restcountries.com/v2/name/${data.country}`)
    })
    .then(res =>{
        if(!res.ok) throw new Error(`Country not found ${res.status}`)
        return res.json();
    })
    .then(data=>{
        console.log(data);
        // renderCountry(data[0]);
    })
    .catch(err =>{
        console.error(`${err.message}`);
    })
  }
//   whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Event Loop in practice ////////

// example 1
console.log('test start');
// timer, fetch, thne,event listener,loading image like that will wait in callback queue
setTimeout(()=>console.log('0 sec timer'),0);
// promise will wait in microtasks queue, microtasks queue has priority than callback queue
Promise.resolve('Resolved promise1').then(res=>console.log(res));
console.log('test end');
// --------------------------------------------------------
// example 2
/*
console.log('test start');
// timer, fetch, thne,event listener,loading image like that will wait in callback queue
setTimeout(()=>console.log('0 sec timer'),0);
// promise will wait in microtasks queue, microtasks queue has priority than callback queue
Promise.resolve('Resolved promise1').then(res=>console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 10000000000; i++) {}
    console.log(res);
  });
console.log('test end');
*/

// ///////////// Callbaacks , Promises, Async/await differnce ////////////

// Callbacks - are the functions passed as an arguments  to another function and executed later, often used in asynchronous operations.
// Promises - provide a cleaner way to handle asynchronous operations an davoid callback hell.
// async/await -  is a syntactic sugar built on top of promises, making asynchronous code more readable and maintainable.

// callbacks example
function fetchData(processData){
  setTimeout(()=>{
    const data = 'hello world'
    processData(data);
  },1000)
}
function processData (data){
  console.log('Processed data:', data.toUpperCase());

}
fetchData(processData);

// In this example, fetchData is a function that simulates fetching data asynchronously (e.g., from a server). It takes a callback function (processData) as an argument and calls it once the data is retrieved.

// promise example
function fetchData11() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Hello, world!';
      resolve(data);
    }, 1000);
  });
}

fetchData11().then((data) => {
  console.log('Processed data:', data.toUpperCase());
});
// Here, fetchData returns a promise that resolves with the data after a delay. You can then use the then method to handle the resolved value (data) asynchronously.

// Async/Await:
async function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Hello, world!';
      resolve(data);
    }, 1000);
  });
}

async function processData() {
  const data = await fetchData1();
  console.log('Processed data:', data.toUpperCase());
}

processData();
// In this example, the fetchData function returns a promise, and the processData function uses await to wait for the promise to resolve. This makes the asynchronous code look more synchronous and easier to read.

// Nested callback - callback hell
// Simulating asynchronous operations with setTimeout
function operation1(callback) {
  setTimeout(() => {
    console.log('Operation 1 completed');
    callback(); // Callback is invoked here
  }, 1000);
}

function operation2(callback) {
  setTimeout(() => {
    console.log('Operation 2 completed');
    callback(); // Callback is invoked here
  }, 1000);
}

function operation3(callback) {
  setTimeout(() => {
    console.log('Operation 3 completed');
    callback(); // Callback is invoked here
  }, 1000);
}

// Named callback functions
function onCompleteOperation1() {
  console.log('Operation 1 callback completed');
  operation2(onCompleteOperation2);
}

function onCompleteOperation2() {
  console.log('Operation 2 callback completed');
  operation3(onCompleteOperation3);
}

function onCompleteOperation3() {
  console.log('Operation 3 callback completed');
  console.log('All operations completed');
}

// Initial callback invocation
operation1(onCompleteOperation1);

///////////////////////
// Simulating asynchronous operations with setTimeout
function operation1(callback) {
  setTimeout(() => {
    console.log('Operation 1 completed');
    callback(); // Callback is invoked here
  }, 1000);
}

function operation2(callback) {
  setTimeout(() => {
    console.log('Operation 2 completed');
    callback(); // Callback is invoked here
  }, 1000);
}

function operation3(callback) {
  setTimeout(() => {
    console.log('Operation 3 completed');
    callback(); // Callback is invoked here
  }, 1000);
}

// Nested callbacks leading to callback hell
operation1(() => {  // Anonymous callback function here
  operation2(() => {  // Anonymous callback function here
    operation3(() => {  // Anonymous callback function here
      console.log('All operations completed');
    });
  });
});

// promises and fetch api example
// Function that returns a Promise for fetching data from a URL
function fetchData(url) {
  console.log(url)
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous HTTP request using Fetch API
    console.log(url)
    // fetch(url)
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        // Check if the response status is okay
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON data from the response
        return response.json();
      })
      .then(data => {
        // Resolve the Promise with the parsed JSON data
        resolve(data);
      })
      .catch(error => {
        // Reject the Promise with the encountered error
        reject(error);
      });
  });
}

// Example usage of fetchData with a Promise
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetchData(apiUrl)
  .then(data => {
    console.log('Fetched data:', data);
    // Perform additional processing or actions with the fetched data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


// callback example
function sum(){
  let a = 5;
  let b=4;
  add(a,b)
}
function add (a,b){
  console.log(a+b)
}
sum(add)

/*
///////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));


///////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

*/

///////////////////////////////////////
// Consuming Promises with Async/Await

// fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
// fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
 // return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
//  return fetch(`https://restcountries.com/v2/alpha/${data.countryCode}`)
  
// building promise
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// async/await use for consuming promises

// fetch(`https://restcountries.com/v2/name/${data.countryName}`)
// .then(res => console.log(res)); this promise is equal to below async/await
// const res = await fetch(`https://restcountries.com/v2/name/${data.countryName}`);
// console.log(res)
const whereAmi = async function(){
  try{
  // GeoLocation
  const pos = await getPosition();
  const {lattitude:lat,longtitude:lng} = pos.coords;

  // REverse geocoding
  const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
  if (!resGeo.ok) throw new Error('Problem getting location data');
  const dataGeo = await resGeo.json();
  console.log(dataGeo);
const res = await fetch(`https://restcountries.com/v2/alpha/${dataGeo.countryCode}`);
if (!res.ok) throw new Error('Problem getting country');
const data = await res.json();
console.log(data);
return `You are in ${dataGeo.city},${dataGeo.countryName}`

  }
  catch(err){
    console.log(`${err}`)
      // Reject promise returned from async function
      throw err;
  }
}
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmi();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();


console.log('will execute First before wherami function bcoz whereami is async')

///////////////////////////////////////
// Running Promises in Parallel - to run multiple promises at the same time

const getJSON1 = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Promise.all - will not run if even one reject is there.
// Promise will resolve when all of the input Promises have resolved, or it will reject if any of the input Promises reject.
// If any of the promises were to reject, the entire Promise.all would reject, and the catch block would be triggered.
const get3Countries = async function(c1,c2,c3){
  try{
     // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON1(`https://restcountries.com/v2/name/${c1}`),
      getJSON1(`https://restcountries.com/v2/name/${c2}`),
      getJSON1(`https://restcountries.com/v2/name/${c3}`)
    ]);
    console.log(data.map(d=>d[0].capital))
}catch(err){
  console.log(err);
}
}
get3Countries('portugal', 'canada', 'tanzania');


Promise.all([
  Promise.resolve('success'),
  Promise.reject('Failure'),
  Promise.resolve('Another success')
]).then((res)=>console.log(res))
.catch(err=>console.log(err))

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any


// Promise.race - whether resolve or reject will run first promise only
const getRaceCountries = async function(c1,c2,c3){
try{
const [data1] = await Promise.race([
  getJSON1(`https://restcountries.com/v2/name/${c1}`),
  getJSON1(`https://restcountries.com/v2/name/${c2}`),
  getJSON1(`https://restcountries.com/v2/name/${c3}`)
    ]);
    console.log(data1.capital)
} catch(err){
  console.log(err);
}
}
getRaceCountries('portugal', 'canada', 'tanzania');

// Promise.allSettled = all promise will run both resolve & reject

Promise.allSettled([
  Promise.resolve('sucess settle'),
  Promise.reject('failure setlle'),
  Promise.resolve('another success setlle')
]).then(res=>console.log(res)).catch(err=>console.log(err))


// Promise.any
// Think of a situation where at least one promise succeeds.
// Resolves as soon as any of the promises in the iterable resolves (at least one succeeds).
// Example: It's like a second chance – at least one promise can make it.


// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
