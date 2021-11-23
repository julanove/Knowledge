TypeScript

--------------------------------------------

clientを特定するためのUUID

1. Rest Parameters

function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

2. Function Constructor 
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);


3. The fat arrow notation/lambda notation (=>) − It is also called as the goes to operator

4. new String();

5. Array
var numlist:number[] = [2,4,6,8] 
------------
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);
var arr:number[] = [12,13] 
------------
var[x,y] = arr 

6. Tuple

7. Interface
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
}

--------------------------------------------

function greeter(person: string) {
  return `Hello ${person}!`
}

const name = 'Node Hero'

console.log(greeter(name))

--------------------------------------------

