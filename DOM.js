"use strict";

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// will return first button element
console.log(document.querySelector("button"));
// will return nodelist of all buttons
console.log(document.querySelectorAll("button"));
console.log(document.querySelectorAll(".section"));
// will return html live collections of all buttons
console.log(document.getElementsByTagName("button"));
// HTMLCollection is a live collection of elements, accessible by name or index, while NodeList is a collection of nodes (including elements), accessible only by index, with more versatile methods, and can be either live or static.
console.log(document.getElementById("para"));
// will return html collection
console.log(document.getElementsByClassName("btn"));

// Create Element
let targetElement = document.getElementById("btn1");
// insert html before target element
targetElement.insertAdjacentHTML(
  "beforebegin",
  "<p>Will add before the target element</p>"
);
// insert html after tsrget elemnt
targetElement.insertAdjacentHTML(
  "afterend",
  "<p>this will add after target element</p>"
);
// insert html as first child of target element
targetElement.insertAdjacentHTML(
  "afterbegin",
  "<p>will addas first child of target element</p>"
);
// insert html as last child of target elemnt
targetElement.insertAdjacentHTML(
  "beforeend",
  "<p>this will add as last child of target element</p>"
);
// similarly we have insertAdjacentText,insertAdjacentElement

//document.createElement
let newElem = document.createElement("button");
newElem.classList.add("btn");
newElem.textContent = "this is text";
// newElem.innerHTML = 'in this way also we can write text';

// will add as first child of targetlement
// targetElement.prepend(newElem);
// will show newelement as both first and last child of target element
// targetElement.prepend(newElem.cloneNode(true));
// will add as last child of target element
// targetElement.append(newElem);
// targetElement.append(newElem.cloneNode(true));
// will display before of after target element
// targetElement.before(newElem)
targetElement.after(newElem);

document.getElementById("btn2").addEventListener("click", () => {
  newElem.remove();
});
// old method to delete element
// document.getElementById('btn2').addEventListener('click',()=>{
//     newElem.parentElement.removeChild(newElem);
// })

// styles, attributes,classes
newElem.style.backgroundColor = "blue";
newElem.style.width = "50%";
// we can only see like this for inline style
console.log(newElem.style.backgroundColor);
let butn = document.getElementById("btn2");
console.log(butn.style.color);
// we can see computed style properties of specific element after applying all styles and also can see css properties for that element using this
console.log(getComputedStyle(targetElement).height);
// console.log(getComputedStyle(targetElement).color);

targetElement.style.height =
  Number.parseFloat(getComputedStyle(targetElement).height) / 2 + 40 + "px";

// document.documentElement.style.setProperty('--color-primary', 'orangered')
document.documentElement.style.setProperty("color", "green");
console.log(document.documentElement.style.getPropertyValue("color"));

// attributes
const logo = document.querySelector(".flowerclass");
console.log(logo.alt);
// absolute url
console.log(logo.src);
// relative url
console.log(logo.getAttribute("src"));
console.log(logo.className);

// non standard attribute
console.log(logo.credit);
console.log(logo.getAttribute("credit"));
logo.setAttribute("designer", "xxxx");

// data attribute
console.log(logo.dataset.versionNumber);

// class
logo.classList.add("c", "j");
logo.classList.remove("c");
logo.classList.toggle("c");
// if  includes class 'c'
console.log(logo.classList.contains("c"));

// dont use
logo.className = "add";
// it will remove existing classes in element and add this one

// // Event Listener
// JavaScript Events:
// Mouse Events:
// click: Fires when the pointing device button is clicked over an element.
// dblclick: Fires when the pointing device button is double-clicked over an element.
// mousedown: Fires when the pointing device button is pressed over an element.
// mouseup: Fires when the pointing device button is released over an element.
// mousemove: Fires when the pointing device is moved while it is over an element.
// mouseenter and mouseleave: Fire when the mouse enters or leaves an element.
// Keyboard Events:
// keydown: Fires when a key is pressed down.
// keyup: Fires when a key is released.
// keypress: Fires when an actual character is being inserted.
// Form Events:
// submit: Fires when a form is submitted.
// reset: Fires when a form is reset.
// input: Fires when the value of an input element changes.
// change: Fires when the value of a form control changes.
// Focus Events:
// focus: Fires when an element receives focus.
// blur: Fires when an element loses focus.
// Window and Document Events:
// load: Fires when the entire page has loaded, including all assets.
// unload: Fires when the user navigates away from the page.
// resize: Fires when the browser window is resized.
// scroll: Fires when an element's scrollbar is scrolled.
// Touch Events:
// touchstart, touchmove, touchend, touchcancel: Correspond to touch interactions on touch-enabled devices.

// targetElement.addEventListener('click',()=>{
//     alert('button clciked')
// })

// window.addEventListener('resize',()=>{
//     document.documentElement.style.color='blue';
// })

// old way of adding eventlistener
// we cant write multiple evnts using this
// targetElement.onclick=()=>{
//     alert('clicked')
// }

const btnfnc = () => {
  alert("button clciked");
};
const btnelem = document.getElementById("btn3");
btnelem.addEventListener("click", btnfnc);
btnelem.addEventListener("mouseenter", btnfnc);

setTimeout(() => {
  btnelem.removeEventListener("click", btnfnc);
}, 3000);

// Event propagation - has 2 phases event bubbling,event captring.event bubblin gis a default phase
/* <html>
<body>
<section>
<p>THis is para<a href='#>clcik here</a></p>
<p>second para</p>
</section>
</body>
</html>
--------------for this above example code DOM tree will look like this----------
Document
  |
html element
  |
body element
  |
section element
  |
p element
  |
a element
---------------click event will traverse from root doument to target element <a></a>
that is capturing phase then clcik evnt will start to work on target elemnt and traverse back to previous parent element that is bubbling phase
in event bubbling event will start to work from target element and then will work on parent elements
but in event capturing evnt will start to work first on root and prent elements and hten will work on target element.--------*/

// ---------------Event bubbling example-------------->

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)}`;

document.querySelector("#nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(this.style.backgroundColor);
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
// -----Event capturing clcik event work on this parent and then target a element------------
// document.querySelector('#nav').addEventListener('click',function(e){
//     this.style.backgroundColor=randomColor();
//     console.log( this.style.backgroundColor)
//     console.log(e.target,e.currentTarget)
// },true)

document.querySelector(".navlinks").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(this.style.backgroundColor);
  console.log(e.target, e.currentTarget);
});
document.querySelector("#link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(this.style.backgroundColor);
  console.log(e.target, e.currentTarget);

  // to stop event propagation---generally dont use this------
  // e.stopPropagation();
});

// event delegation-one event listener will be used for all buttons
// where a single event listener is attached to a common ancestor element.
document
  .getElementById("button-container")
  .addEventListener("click", function (e) {
    // if(e.target.tagName==='button'){
    if (e.target.className === "b1") {
      console.log("clicked", e.target.id);
      e.target.textContent = "Clicked!";
    }
  });
// event delegation for smooth scrolling navigation
document.querySelector(".navlinks").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.classList.contains("links"));
  if (e.target.classList.contains("links")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// DOM Traversing
const headerSection = document.querySelector("#headersection");
// downwards traversing to children
console.log(headerSection.querySelectorAll(".hsec"));
console.log(headerSection.childNodes);
console.log(headerSection.children);
headerSection.firstChild.textContent = "THis first child node";
headerSection.firstElementChild.firstChild.textContent = "hgh";
// first and last html element node
headerSection.firstElementChild.style.backgroundColor = "orangered";
headerSection.lastElementChild.style.backgroundColor = "blue";

// Going upwards : Parent
console.log(headerSection.parentNode);
console.log(headerSection.parentElement);
headerSection.closest("section").style.background = "yellow";

// going sidewards siblings
console.log(headerSection.previousElementSibling);
console.log(headerSection.nextElementSibling);
console.log(headerSection.previousSibling);
console.log(headerSection.nextSibling);
console.log(headerSection.parentElement.children);

[...headerSection.parentElement.children].forEach(function (el) {
  if (el !== headerSection) el.style.transform = "scale(0.5)";
  el.style.backgroundColor = "pink";
});

// Lazyloading images

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the 'data-src' attribute
  const images = document.querySelectorAll("[data-src]");

  // Create an Intersection Observer to load images when they come into the viewport
  const observer = new IntersectionObserver(function (entries, observer) {
    // Iterate through each entry in the Intersection Observer
    entries.forEach((entry) => {
      // Check if the entry is currently intersecting with the viewport
      if (entry.isIntersecting) {
        // Get the image element associated with the entry
        const img = entry.target;

        // Set the 'src' attribute of the image to the value in the 'data-src' attribute
        img.src = img.dataset.src;

        // Stop observing the image to avoid unnecessary load attempts
        observer.unobserve(img);
      }
    });
  });

  // Observe each image element in the NodeList
  images.forEach((img) => {
    observer.observe(img);
  });
});


// document.addEventListener('DOMContentLoaded',function(){
//     const images = document.querySelectorAll('img[data-src]');
//     const observer = new IntersectionObserver(function(entries,observer){
//         entries.forEach((entry)=>{
//             if(entry.isIntersecting){
//             const img = entry.target;
//             img.src=img.dataset.src;
//             observer.unobserve(img)
//             }
//         })
//     }) 
//         images.forEach((img)=>{
//             observer.observe(img)
//         })
// })
// -----------using root threshold--------------
/*
// Select the element to be observed
const targetElement = document.querySelector('.target');

// Options for the IntersectionObserver
const options = {
  root: document.querySelector('.scroll-container'), // Set a specific element as the viewport
  threshold: 0.5, // Trigger the callback when 50% of the target is visible
  root:null,
  threshold:0,
  rootMargin:'200px'
};

// Callback function for the IntersectionObserver
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Target element is intersecting!');
    }
  });
}

// Create an IntersectionObserver with the specified options and callback
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the target element
observer.observe(targetElement);
*/

// DOM Lifecycle Events
document.addEventListener('DOMContentLoaded',()=>{
    console.log('html parsed dom tree created')
})
window.addEventListener('load',function(){
    console.log('after entire page loaded')
})
// use beforeunload if user trying to load window in between filling the form or loading the site
window.addEventListener('beforeunload',function(e){
    console.log('code to run before the page in unloaded')
    e.preventDefault();
    console.log(e);
    e.returnValue='';
})
// unload is less commonly used due to limitations on what can be done during the unload process.
window.addEventListener('unload', function () {
    // Code to run when the page is being unloaded
  });

//   --------------- defer , async ----------------
/*normally we can script file in html head of before the end of body
if we include script file before the of body - first full html file will parse,then script file will execute. no need of defer, async.
if we include script file in the head - first html file execute in between  it will start to fetch and excute script file onthat time when script is fetchong and excuting html file will wait and then after script file excution html will start to parse again
if we include async in head - first html file start to parse asynchronusly script file will downloador fetch .when excutre script html will wait after thes script exceutun html will start to parse.
if we include defer in head - first html file start to parse, asynchronusly script file will download or fetch but fter completing htmlparsinh then only script file will execute. 
use defer - if u want script file excution in order
use async - if u dont want file excution in order, and third party scripts*/

