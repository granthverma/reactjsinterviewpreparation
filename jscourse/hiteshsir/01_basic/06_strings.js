/*
   '  ---- > single quate
   "" ----->  double qu


   string interpolation  -->   ${}
   on tht go kar skta hai 

   .length --> 8 length aa gayi 
   .toUpperCase
   .charAt (number pass karte hai )   --- > konsi postion par hai 

   reserve karna indexof('t')  t konsi postion par hai 
  
  hitesh -hc -->

     substring -->.( start , end)

     slice --->>>   negative value bhi de sakta hai  tukada

     trim ---> trim  --->  "  himanshu   "
     no want space .trim()
     its remove starting space ending space 


     replaced --> "https//dog.com/dog%30hoh"

     --->>> url.replace('%20' , '-')
     url.include  -->word include hai ya nahi



     --> base on mutiple things  ---->
                        split  -->> 

*/


// JavaScript String Methods  ->.>>>>>>>>>
/*
1 String length ✅
2 slice(start, end)✅
3 substring(start, end)✅
4 substr(start, length✅
5 replace() ✅
6 ReplaceAll() ✅
7 Converting to Upper and Lower Case ✅
8 JavaScript String concat() ✅
9 JavaScript String trim() ✅
10 String trimStart() ✅
11 String padStart()/ padEnd() ✅
12 charAt(position) ✅
13 charCodeAt(position) ✅
14 split() ✅
15 url.replace/include ✅git 
16


 
*/


// 1 String length == total length
// string length use for length for chartecor 

 const jscourse = new String('target is 5 days compeleted revsion')
//  console.log(jscourse.length);

 // 2 slice(start, end) -->

   // slice  ka simple matlab hota ha  tukada  start talking about index 0 postion  end last wala ya last wala index 
   

   const tukada =new String ('chalo karo')
    // console.log(tukada.slice(0 ,2));
// ch  2 value 0,1

  // c -0 h -1 a -2 l- 3 end not included JavaScript counts positions from zero.
 
//   console.log(tukada.slice(7));
  //last index not include 


//   console.log(tukada.slice(-7 ,-3));

//   pahle wale chala jayaga  ans --> lo kar

//  3 substring(start, end)

    // console.log(tukada.substring(-7,2));
// The difference is that start and end values less than 0 are treated as 0 in substring().

// 3-->String substr() --> The difference is that the second parameter specifies the length of the extracted part.

//  console.log(tukada.substr(2 ,7));



// 4 -->  replace() 

// console.log(tukada.replace("karo" , "jaldi karo" ));
// To replace all matches, use a regular expression with a /g flag (global match):
// To replace case insensitive, use a regular expression with an /i flag (insensitive):


// console.log(tukada.replaceAll("a" , "b" ));


// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

const chotabada = new String(`HARD WORK KAR LO`);

// console.log(chotabada.toUpperCase());

// console.log(chotabada.toLowerCase());


// 8 JavaScript String concat()
// concat() joins two or more strings:

const join1 = new String(`hard`)
const join2 = new String(` work lo bhai`)

// console.log(join1.concat(join2));



// 9 JavaScript String trim() ✅  --->>> The trim() method removes whitespace from both sides of a string:


  const removewhitespace =new String (`             hard             work kar lo     `)
  
//  console.log(removewhitespace.trim());


//  10 String trimStart() ✅

// console.log(removewhitespace.trimStart());


// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// trimEnd() ✅

// console.log(removewhitespace.trimEnd());


// 11 String padStart() ✅

const abc = new String ("989")

// console.log(abc.padStart (9 , "x"));
// jis bhi index tk hum pochan hai start se wo le lenga jo bhi lena cha tha hai
// console.log(abc.padEnd (9 , "x"));

// some upper se bas end main aa jayaga 

// 12 charAt(position) ✅ index par konsa char hai bata tha hai

//  charAt() method returns the character at a specified index (position) in a string:
  
 const text =new  String ("himanshu");
//  console.log(text.charAt(4));


// 13 charCodeAt(position) ✅ char konse index par hai 
// unicode of the character at a given position in a string:
// console.log(text.charCodeAt(`5`));



//   String.split()

const str = `the quick show work hard no option`;
const word =str.split(` `);
//  console.log(word[0]);


const chars = str.split(``);

// console.log(chars[1]);

const strCopy = str.split ();
// console.log(strCopy);

// console.log(str.match (`show`)); 

const texts =` hello brother chalo kuch karo `

console.log(texts.match(`hello`));




const url = "https://himanshuverma/himanshu%90verma"

console.log(url.replace('%90', '-'))

console.log(url.includes('sundar'))
