console.log('hello world!');

//arithmetic operators
let a=5;
let b=2;
let c=a+b;
console.log('a = ',a,'b = ',b);
console.log('a+b=',a+b,'or',c);
console.log('a-b=',a-b);
console.log('a X b =',a*b);
console.log('a/b =', a/b);
console.log('a mod b =',a%b);
console.log('a to the power b =', a**b);
console.log('a is incremented to',++a); /* prefix operation */
console.log('b is decremented to',--b);

/* prefix changes the value first and then performs the operation
postfix performs the operation and then changes the value for next line */

//assignment operators
console.log('a = (a+4) =',a+=4);
console.log('a = (a-4) =',a-=4);
console.log('a = a to the power 4=',a**=4);
console.log('a = a mod 4=',a%=4);

//comparison operators
console.log('is a=b',a==b);
console.log('is a not = b',a!=b); /* js can convert string to number if string contains only number */
console.log('a = b furthermore a and b belong to same datatype',a===b)
console.log('a is not = b furthermore a and b belong to same datatype',a!==b)
console.log('is a > b',a>b);
console.log('is a <= b',a<=b);
console.log('a=',a,'b=',b);

//logical operators
let cond1=a<b;
let cond2= a==0;
console.log('cond1 and cond2',cond1 && cond2,'or',a==0 && a<b);
console.log('cond1 or cond2',cond1 || cond2,'or',a!=0 || a>b);
console.log('not cond1 or cond2', ! (cond1 || cond2),'or',!(a!=0 || a>b));

//conditional statements
b=8;
while(a<=b){
    if(a<=b){
        a++;
    }
}
console.log(a,b);

let age=19;
if(age>=18){
    console.log('You May Vote');
} else {
    console.log('No Bueno, Amigo')
}

let num=2102;
if(num%2===0){
    console.log(num,'is even');
}else{
    console.log(num,'is odd');
}

let homieStatus='Homie'
if(homieStatus==='Not Homie'){
    console.log('He got a glock with your name on it');
} else if(homieStatus==='Homie') {
    console.log('He a Real one');
} else {
    console.log('Pop him');
}

//ternary operator
let result = age>18?'adult':'not adult';
console.log(result);

//Basic Program 1

let number=prompt('Enter a Number');
if(number%5===0){
    console.log(number,'is a multiple of 5');
} else {
    console.log(number,'is not a multiple of 5')
}

//Basic Program 2

let marks=prompt('Score');
if(100>=marks && marks>=80){
    console.log('A');
} else if(79>=marks && marks>=70) {
    console.log('B');
} else if(69>=marks && marks>=60) {
    console.log('C');
} else if(59>=marks && marks>=50) {
    console.log('D');
} else if(49>=marks && marks>=0) {
    console.log('F');
} else {
    console.log('You Stupid');
}
