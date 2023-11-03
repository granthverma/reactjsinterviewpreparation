/**
 * 2 things you selected 
 * all - kuki sari selected karna hai
 */


// const buttons = document.querySelectorAll('.button'); // body  button sare button chaiya toh all
// const body = document.querySelector('body');  // now selected body then variable mein hold kar liya

// buttons node list toh forEach loop laga sakat hai , foreach mein function

// suna wale chaiya toh event listener only click event , kya suna ha toh call back toh abhi ke liya event = de diya hai 
//  e mouse event hau
// e.target 



const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');




buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener ('click' ,function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === grey) {
            body.style.backgroundColor =e.target.id;
            
        }

        if (e.target.id === purple) {
            body.style.backgroundColor =e.target.id;
            
        }
        if (e.target.id === blue) {
            body.style.backgroundColor =e.target.id;
            
        }
        if (e.target.id === yellow) {
            body.style.backgroundColor =e.target.id;
            
        }

        if (e.target.id === pink) {
            body.style.backgroundColor =e.target.id;
            
        }

        
    });
    
});








    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'pink') {
    //     body.style.backgroundColor = e.target.id;
    //   }
    
//   });
// });




   //  if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // //  body.style.backgroundColor = "grey" 
    // }



















//    event kha se aa raha hai 
    //  if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // //  body.style.backgroundColor = "grey" 
    // }
  
    





