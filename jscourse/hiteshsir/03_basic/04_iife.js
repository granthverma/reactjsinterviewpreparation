/**
 * Immediately Invoked Function Expressions (IIFE)
 * 
 * FUNCTION LIKHA TH EXECUTE KARNA HOTA HAI 
 * data scope --> 
 * global scope  execution se pulted nahi ho jaya 
 * global koi problem nahi crate tum pata hai baccha se bado se manga skta hai
 * () defination ()  execution
 * ; end hona chaiya phale code dusara things start hogi 
 */


//  function doit() {
    
//      console.log(`hardwork then travel hard`);
//  }


// doit()



( function doit() {
    //name iife
    console.log(`hardwork then travel hard`);
})();


(()=>{
    console.log(`do it now sometimes later becomes never`);
})() ;
// simple iife
// must be end one fuction to run  other functions

// how to passed paremeter
( (name) => {
    console.log(`do it now sometimes later becomes never ${name} `);
})(`himanshu`);

//  do iife eksath mtalab  semicoloum toh aana chaiya