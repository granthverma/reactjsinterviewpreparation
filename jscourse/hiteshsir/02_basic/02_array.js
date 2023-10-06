const heros =["guru", "sardar" ,"hindu"]
const fc_heros = ["superman" ,"batman" ,"thor"]

// heros.push(fc_heros)

// console.log(heros);

// console.log(heros[2][1]);

// result ----> [ 'guru', 'sardar', 'hindu', [ 'superman', 'batman', 'thor' ] ]
/**
    
there is 1st index  is  guru 
there is 2st index is sardar
there is 3st index hindu
there is 4st index [ 'superman', 'batman', 'thor' ] 

but ---> es tho kaam nahi chalga  but kya kar 

stage 2

then solution concat ---> jod deta hai value ek bana deta hai 
--> 3 =1+2
    allHeros = heros.concat(fc_heros)

but es better hai bhai 


 Spread Operator -----> wo kya hota hai bro 

 ... ------> ye kya ha ?

 ... ----> ye toh bhai  Spread Operator

 dekha tha eska use -->



 */


//  ------------------------------------
        //    concat -->
// const allHeros = heros.concat(fc_heros)

// console.log(allHeros);



// ----------------------------------------------------
            //    Spread Operator  ...  ye use hota mostly no limition value kitni bhi lo aap 

        const all_heros = [...heros ,...fc_heros]   

        // console.log(all_heros);

// --------------flat-------  flat use bhut array ko ek array main convert karna main use hota hai
  const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]   
  
  const real_another_array = another_array.flat(Infinity)
//   console.log(real_another_array);

// ------------- data scraping खुरचना -----



// console.log(Array.isArray("himanshu"));  /// asking for array ki aaarya nahi hai ya hai 

// console.log(Array.from("himanshu"));  // convert in  array


// console.log(Array.from({name:"himanshu"})); // imp 888888 topic  they asking key :value of array 

// key :value 


let num1 = 100
let num2 =200
let num3 =300

// console.log(Array.of(num1 , num2 , num3));   convert any value into array






