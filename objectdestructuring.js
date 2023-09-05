'use strict';
const weatherSummary = ({city, temperature, condition, humidity}) => {
  console.log(`The weather in ${city} is ${condition} with a temperature of ${temperature}°F and a humidity of ${humidity}%.`)
}

const apiResponse = {
  city: "New York",
  temperature: 72,
  condition: "Sunny",
  humidity: 55,
};
console.log(apiResponse)
weatherSummary(apiResponse);