//Assignment-2 
//Student Pjerind Zefi

const mydata= [5, 10, 20, 25, 35];

console.log("in this function each number is devided by 2");
const myEach = (nums, callback)=>{
  for(let i=0;i<nums.length; i++){
    callback(nums[i]);
  }
}

const dividedByTwo=(num)=>console.log(num/2);
myEach(mydata, dividedByTwo);

console.log("\nmap(): square each number in array");
const myMap = (nums, callback)=>{
  const squareArray=[];
  for(let i=0;i<nums.length; i++){
    squareArray[i] = callback(nums[i]);
  }
  return squareArray;
}

const square=(num)=>{return num*num;}
console.log("hire is mydata array: "+ mydata);
console.log(myMap(mydata,square));

console.log("\nfilter(): will return an arraay that the numbers are greater than 20 in mydata array");
const myFilter = (nums, callback)=>{
  const arrayfilter=[];
  for(let i=0;i<nums.length; i++){
    if (callback(nums[i])===1){
      arrayfilter.push( nums[i]);}
  }
  return arrayfilter;
} 

const filterNeed=(num)=>{
  if (num>20) {return 1;}
  else { return 0;}
}
console.log("mydata array: "+ mydata);
console.log(myFilter(mydata,filterNeed));

console.log("\nin this function it will check if any of the numbers in array are devided by 3 or not");
const mySome = (nums, callback)=>{
  for(let i=0;i<nums.length; i++){
    if (callback(nums[i])){
      return true;}
  }
  return false;
} 

const someNeed=(num)=>{
  if (num%3===0) {return true;}
  else {return false;}
}
console.log(mySome(mydata,someNeed));

console.log("\nin this functin it will check if any number is even");
const myEvery = (nums, callback)=>{
  for(let i=0;i<nums.length; i++){
    if (callback(nums[i])===false){
      return false;}
  }
  return true;
} 

const everyNeed=(num)=>{
  if (num%2===0) {return true;}
  else {return false;}
}
console.log(myEvery(mydata,everyNeed));

console.log("\nin this function it will merge all elements");
const myReduce = (nums, callback)=>{
  let sum=0;
  for(let i=0;i<nums.length; i++){
    sum=callback(nums[i],sum);
  }
  return sum;
} 

const reduceNeed=(num1,num2)=>num1+num2;
console.log(myReduce(mydata,reduceNeed));

const pets = ['fish', 'cat', 'dog'];
const target='mouse';
console.log("\nit will check if any element is targeted");
const myIncludes = (word)=>{
  for(let i=0;i<word.length; i++){
    if(word[i]===target)
    return true;
  }
  return false;
}

console.log(myIncludes(pets));

console.log("\nit will check if any element is targeted and return minus one");
const targetNum = 18;
const myIndexOf = (nums)=>{
  for(let i=0;i<nums.length; i++){
    if(nums[i]===targetNum)
    return i;
  }
  return -1;
} 

console.log(myIndexOf(mydata));

console.log("\nit will push the elemeent in my data array");
const elementToAdd = [5, 2, 7, 9, 8];
const myPush =(nums)=>{
  const newArray=[];
  for(let i=0;i<(nums.length+elementToAdd.length); i++){
    if(i<nums.length)
    newArray[i] = nums[i];
    else
     newArray[i] = elementToAdd[i-nums.length];
  }
  return newArray.length;
}
console.log(myPush(mydata));

console.log("\nit will check elements from the last to the first");
const targatindex = 'a';
const myList = ['a', 'c', 'd','e', 'f', 'c','a', 'a', 'd'];

const myUnshift = (list,targatindex) =>{
  let temp =-1;
  for(let i=list.length-1;i>=0;i--){
	  
    if(list[i]===targatindex && i>temp){
      temp = i;}
  }
  return temp;
}
console.log(myUnshift(myList, targatindex));

console.log("\nit will check and pair the elements on the array");
const myItem = {name:'USB', price:12, amount:105}

Object.grabKeys = (object)=>{
  const keylist =[];
  for(const key in object){
    keylist.push(key);
    }
  return keylist;
}
console.log(Object.grabKeys(myItem));

console.log("\nObject.values(): get the values of key:value pairs of that object");
Object.grabValues = (object)=>{
  const values = [];
  for(const value in object){
    values.push(object[value]);
    }
  return values;
}
console.log(Object.grabValues(myItem));

console.log("\n=============================\nSum of a Range");

const range=(num1, num2, step)=>{
  const arrayNum=[];
  let n = num1;
  if(step === undefined){
    let unstep=1;
    number=num1
    for(let i=0;i<num2;i++){
      arrayNum.push(number);
      number+=unstep;
    } 
  }
  else if(num1<num2 && step>0) {
    for(let i=0;i<100;i++){
      if (n>=num2){
        arrayNum.push(n);
        n=n+step;
      } 
      else 
        break;
      }
  }
  else if(num1>num2 && step<0) {

    for(let i=0;i<100;i++){
      if (n>=num2){
        arrayNum.push(n);
        n=n+step;
      } 
      else
        break;
      }
  }
  else {console.log("Error");}

  return arrayNum;
}

const sum=(array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
      sum+=array[i];}
  return sum;
}

console.log(range(1, 10));

console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));a

console.log("=======================\nReversing an Array");
const reverseArray=(array)=>{
	const reArray =[];
	for(let i=array.length-1;i>=0;i--){
		reArray.push(array[i]);
	}
    return reArray;
}

const reverseArrayInPlace=(array)=>{
  	const temp=[];
  	let num = array.length;
    let a = Math.ceil(array.length/2);  
    for(let i = 0; i < a; i++){
      if (num>=0){
      num=num-1;
      temp[i]=array[i];
      array[i]=array[num];
      array[num]=temp[i]
      }
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("==========================\nA List");

const arrayToList = (array)=>{
  const list = {value: null, rest:null};
  list.value = array[0];
  array.shift() //
  if(array.length>0){ 
    list.rest=arrayToList(array);
  }
  else{
    list.rest = null;
  }
  return list;
}

const listToArray =(list)=>{
  const array = [];
  let li=list;
  while(li){
    array.push(li.value);
    li = li.rest;
    }
  return array;
}

const prepend =(v,r)=>{
  const list = {};
  list.value = v;
  list.rest = r;
  return list;
}

const nth =(list, num)=>{
  let position=0;
  for (let i = list; i; i = i.rest){
    if (position===num){
      return i.value;}
    else  position++;
  }
}

console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));


console.log("comparsion of the elements");

const deepEqual = (value1, value2 ) =>{
  if (value1===value2){
    return true;
  }
  else if(typeof value1 === typeof value2 && value1 !==null && value2 !==null)
  { 
    if (Object.keys(value1).length !== Object.keys(value2).length){
      return false;
    }
    for(const key in value1){
      if (value2.hasOwnProperty(key)){  
       
        if (deepEqual(value1[key], value2[key]) == false)
          return false;
      }
      else
      return false;
    }
    return true;
  }
  else 
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));



console.log("=============================\n");
console.log("Mixed Problems (1)");
const myNums= [5, 2, 0, 9, 8, 0, 1, 0, 3, 12];

const moveZeros = (array)=> {
  let count=0;
  for(let i=0;i<array.length;i++){  
    if(array[i]!==0){
      array[count]=array[i];
      count+=1;
    }
  }
  for(let i=count;i<array.length;i++){
   array[count]=0;
   count+=1;
  }
  return array;
}
console.log(moveZeros(myNums));

