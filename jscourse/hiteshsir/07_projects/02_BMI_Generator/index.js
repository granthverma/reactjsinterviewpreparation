

// const form = document.querySelector(`form`)

// // const height = parseInt(document.querySelector(`#height`).value )
// // this usecase will give you empty  value 


// form.addEventListener(`sumbit` , function (e) {
//     e.preventDefault();

//  const height = parseInt(document.querySelector(`#height`).value );
//  const weight = parseInt(document.querySelector(`#weight`).value );
//  const results = document.querySelector(`#results`) ;


// if (height === '' || height <0 || isNaN (height)) {
//     results.innerHTMl ="Please give a vaild height ${height}";
    
// } else if(weight === '' || weight <0 || isNaN (weight)) {
//     results.innerHTMl ="Please give a vaild height ${weight}"}

//     else {
//         const bmi = (weight /((height *height )/10000).toFixed(2));
//         //show the result
//         results.innerHTMl = `<span>${bmi} </span>`
//     }


// })



const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});




















/**
 * pahle from selected hoga 
 * get ya post se sumbit hoga  from  data khai jata hai 
 * preventdefault  ko rukan hoga
 * 
 * eventlist --> 
 * 
 * string value ko parseint convert kiya then hold value
 * weight id with 
 * 
 * click  karte  time value chaiya value  hum ko toh inner mein write karge , outer mein hoga toh  empty value miligi 
 * 
 * talk sumbit event
 * 
 */


