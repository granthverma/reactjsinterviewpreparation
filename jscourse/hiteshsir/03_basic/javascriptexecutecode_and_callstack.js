    /**
     *  javascript execution context 
     * अमल में लाना ke context or reference main
     *   JEC
     * JO FILE BANI WO RUN KAISE HOGI
     * YE 2 FACE RUN KARTI HAI 
     * {}  - > GLOBAL EXECUTION  THIS CONTEXT BANA THA HAI
     * -> GLOBAL EXECUTION CONTEXT
     * -> FUNCTION EXECUTION CONTEXT 
     * -> EVAL EXECUTION CONTEXT 
     * 
     * 
     * ------------------------------------
     * {}  
     * -->>>>> 1ST PHASE MEMORY CREATION PHASE / CREATION PHASE
     *          JAGAH ALLOCATED HOTI HAI VARIABLE 
     * 
     * --->  2ST  PHASE EXECUTION PHASE 
     *       +- YHI HOTA HAI 
     *  
     * --------------------------------------
     * LETS  SEE EXMPLE
     * 
     *  let val1 =10 
     *  let val2 =5
     *  
     *  function addNum (num1 , num2) {
     *   let total = num1 +num2
     *   return total
     * 
     * }
     * 
     * let result1 = addNum(val1 ,val2)
     * let result2 = addNum(10,2)
     * 
     * 
     * 
     * ----> step one 
     * 
     *      global execution -this 
     * 
     * 
     * 
     * 
     * --->>> step two  cretion phase 
     *   // jitne bhi variable hota  unko  ikattha karke leta hai es phase main
     * 
     *       Memory phase 
     *        val1 -> undefined
     *        val2 -> undefined
     * 
     *        addnum -> defination
     *         
     *         result1 ->undefined
     *         result2 ->undefined
     * -----> phale ki 2 value bhi undefined aayga , phale cycle run hota  hi hai  anyhow 
     * 
     * 
     *         EXECUTION PHASE 
     *          
     *         VAL1 ---> 10 
     *         VAL 2 ----> 5
     *      
     *       addNum --> function hai   defination hai (sab kuch) after deleted
     *       result 1= 15
     *       result 2 = wo sab kuch ()
     *       result 12 
    //  in shot  new vaiable enviroment and excution thread hoga 
        then memoery creation phase main -- >  num1 - undefined  , num2 - undefined , total - undefined 
        EXECUTION PHASE --> mein  num1 - >10
                                  num2 --> 2   
                                  total --> 12 

                                  then return go GE
                                   then deleted this things
     *      
     *        
     *  (sab kuch) ----->>>>>>
     *   result1 -->>addnum but wo toh funcation toh kya kare
     * 
     * >>>> es case addnum mein -- > new variable enviroment 
     *                          -->   execution thread create hoga 
     *                          --> kaam end hona deleted bhi hota hai most important
     *                          
     * 
     * toh phar again dono phase cratre hoga hai ji baikul hoga jitne bhi function hoga uitne baar ye sab kuch hoga
     * 
     * 
     *     chalo katre hai  ---->>   memory phase 
     *                                val1 -> undefined
     *                                val2  --->undefined
     *                                 total -undefined
     *    execution context  -------> num1 = 10
     *                                num2 = 5
     *                                 total =15
     * return ->ge bhi chal jayaga 
     * 
     * 
     * 
     *     
     *   
     * 
     *  
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * THIS KI WINDOW OBJECT AATI 
     * SINGLE THRED HOTI HAI 
     * 
     * ------------------------ call stack -->
     * [    ]       lifo method last in frist out
     * [    ] 
     * [ ge ]
     * 
     * 
     * 
     * one method 
     * two method
     * three method 
     * jo last aayaga wo phale chal jayaga
     */

   function one() {
    console.log("one");
 }
 function two() {
    console.log("two");
    
 }

 function three() {
    console.log("three");
    
 }
 one()
 two()
 three()



