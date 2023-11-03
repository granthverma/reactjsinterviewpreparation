const clock = document.getElementById (`clock`)

// const clock = document.querySelector(`clock`)




// to get a time 

// setinterval  kitne time contine  karna program

setInterval (function () {
    let date = new Date ();
//  console.log(date.toLocalTimeString());
banner.innerHTML = date.toLocaleDateString();
 clock.innerHTML = date.toLocaleTimeString();

}, 1000);