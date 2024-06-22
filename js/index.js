// masala 1
// function colors(color1, color2, color3) {
//     let res = [];
//     res.push(color1);
//     res.push(color2);
//     res.push(color3);

//     return res;
// }
// console.log(colors('yashil', 'oq', 'qora'))


// masala 2
// function colors(lor1, lor2, lor3) {
//     let res = [];
//     res.push(lor1);
//     res.push(lor2);
//     res.push(lor3);

//     return res;
// }
// console.log(colors(1, 5, 5))


// masala 3
// function colors(arr) {
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// }
// console.log(colors([1,2,3,4,5]))



// masala 4
// function colors(arr, element) {
//     arr[1]=element

//     return arr;
// }
// console.log(colors([1,2,3,4,6],89));

// // masala 5
//  function numberss(arr, element){

//     arr.push(element);
//     return arr;

//  }
// console.log (numberss([1,2,3,4,5,6],89));

// masala 6

// function numberss(arr){
//         arr.pop();
//         return arr;

//      }
//     console.log (numberss([1,2,3,45]));



// masala 7

// function lengrthn (arr){
//     let res =arr.length
//     return res;
// }

// console.log(lengrthn([1,2,3,45]))




// masala 8
// function fistArr(arr, element){
//     arr.unshift(element);
//     return arr;
// }
// console.log(fistArr([1,2,3,45],5))


// masala 9
// function fistArr(arr){
//     arr.shift();
//     return arr;
// }
// console.log(fistArr([1,2,3,45]))


// masala 10
// function fistArr(arr, arr2){
//     let res = arr.concat(arr2)
//     return res;
// }
// console.log(fistArr([1,2,3,45],[9,8,7,6]))


// masala 11
// function andi(arr, element) {
//     let res = arr.includes(element);
//     return res;
// }
// console.log(andi([1, 2, 3, 4, 5, 6], 5))

// masala 12
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function sorti (arr){
//     return arr.sort();
// }
// console.log(sorti(future))

// masala 13
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function sorti (arr, element){
//     return arr.indexOf(element);
// }
// console.log(sorti(future,'behi'))


// masala 14
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function sorti (arr){
//      arr.splice(1,2);
//     return arr;
// }
// console.log(sorti(future))


// masala 15
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function sorti (arr){
//      arr.splice(arr.length-2,2);
//     return arr;
// }
// console.log(sorti(future))


// masala 16
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function sorti (arr, element,element1){
//      arr.splice(1,0,element,element1);
//     return arr;
// }
// console.log(sorti(future,'jiyda','apelsin'))


// masala 17
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function Mas (arr){
//     let res =arr[0];
//     let ress= arr[arr.length-1];
//     arr[0]=ress;
//     arr[arr.length-1]=res;
//     return arr;
// }
// console.log(Mas(future))

// masala 18
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function nime (arr){
//     arr.splice(0,arr.length)
//     return arr;
// }
// console.log(nime(future))


// masala 19
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// function conti (arr,arr2){
//     arr2=[...arr]
//     return arr2.reverse();
// }
// console.log(conti(future))



// masala 20
// let future = ['olma', 'anor', 'gilos', 'orik', 'shoftoli', 'behi', 'nok'];
// let futures =[];
// function masTvuelement (arr,arr1)
// {
//  for (let i = 0; i<arr.length; i++){
//     arr1.push(arr[i]);
//     arr1.push(arr[i]);
//  }
//  return arr1
// }
// console.log(masTvuelement(future, futures))



// masala 21
// let future = [1, 2, 35, 46, 50, 66, 7];
// function big (arr){
//     let res = Math.max(...arr);
//     return res;
// }
// console.log(big(future))



// masala 22
// let future = [1, 2, 35, 46, 50, 66, 7];
// function big (arr){
//     let res = Math.min(...arr);
//     return res;
// }
// console.log(big(future))



// masala 23
// let future = [1, 2, 35, 46, 50, 66, 7];
// function big (arr){
//     let res =0;
   
//     for(let i=0; i<arr.length; i++){
        
//         res+=arr[i];
//     }
//     return res/arr.length;
// }
// console.log(big(future))

// masala 24
// let future = [1, 2, 35, 46, 50, 66, 7];
// function big (arr){

//     return arr.reverse();
// }
// console.log(big(future))


// masala 25
// let future = [1, 2, 35, 46, 50, 66, 7, -5, -56];
// function musbat (arr, arr1){
//     arr1=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             arr1.push(arr[i])
//         }
//     }
//     return arr1;
// }
// console.log(musbat(future))


// masala 26

// let future = [1, 2, 35, 46, 50, 66, 7, -5, -56];
// function musbat (arr, arr1){
//     arr1=[];
//     for(let i=0; i<arr.length; i++){
//      arr1.push(arr[i]*2)
//     }
//     return arr1;
// }
// console.log(musbat(future))


// masala 27
// let future = [1, 2, 35, 46, 50, 66, 7, -5, -56];
// function musbat (arr, arr1){
//     arr1=[];
//     for(let i=0; i<arr.length; i++){
//      arr1.push(arr[i]**2)
//     }
//     return arr1;
// }
// console.log(musbat(future))


// masala 28
// function number (arr){
//     arr.splice(1,1)
//     return arr;
// }
// console.log(number([45,87,5,9,4,9,8,7,6]))


// masala 29
// function number (arr, element){
//     let res=arr.includes(element)
//     return res;
// }
// console.log(number([45,87,5,9,4,9,8,7,6],5))


// masala 30
// function number (arr){
//     for (const iterator of arr) {
//         let res=iterator>0;
//         console.log(res)
        
//     }
//     return arr;
// }
// console.log(number([45,87,5,9,4,9,8,7,6,-84,-9]))


// masala 31
// function number (arr){
//     let sum =0;
//         for (const iterator of arr) {
//             sum+=iterator;
            
            
//         }
//         return sum;
//     }
//     console.log(number([45,87,5,9,4,9,8,7,6,-84,-9]))


// masala 32
// function number (arr){
//     arr.sort(function(a, b){
//         return a-b;
//     })
//     return arr;
// }
// console.log(number([2,5,3,1,65]))


// masala 33
// function number (arr, arr2){
//       let res = arr.concat(arr2)
//         return res;
//     }
//     console.log(number([45,87,5,9,4,9,8,7,6,-84,-9],[897,546,213]))


// masala 34
// function number (arr){
//       let res = arr.map(function(value,index,a){
//         return value+10;
//       })
//         return res;
//     }
//     console.log(number([45,87,5,9,4,9,8,7,6,-84,-9]))


// masala 35
// function number (arr){
//       let res = arr.sort(function(a,b){
//         return a-b;
//       })
//         return res;
//     }
//     console.log(number([45,87,5,9,4,9,8,7,6,-84,-9]))


// Massiv metodlariga oid masalalar.
// Quyidagi masalarni funksiyalar yordamida ishlang.

// masala 1
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr, element){
// arr.push(element);
// return arr;
// }
// console.log(nevMas(arrayPush,5444))

// masala 2
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr){
// arr.pop();
// return arr;
// }
// console.log(nevMas(arrayPush))

// masala 3
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr){
// arr.shift();
// return arr;
// }
// console.log(nevMas(arrayPush))

// masala 4
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr, element){
// arr.unshift(element);
// return arr;
// }
// console.log(nevMas(arrayPush,'yana'))

// masala 5
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr, element){
// let res=arr.includes(element);
// return res;
// }
// console.log(nevMas(arrayPush,45))

// // masala 6
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr, element){
// let res=arr.indexOf(element);
// return res;
// }
// console.log(nevMas(arrayPush,56))

// masala 7
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr,element){
// let res=arr.lastIndexOf(element);
// return res;
// }
// console.log(nevMas(arrayPush,45))

// masala 8
// let arrayPush = ['salom', 10, 45, 56, 'salom']
// function nevMas(arr){
// arr.splice(1,2);
// return arr;
// }
// console.log(nevMas(arrayPush))

// // masala 9
// function exsplise (arr, element){
//     arr.push(element)
//     return arr;
// }
// console.log(exsplise([1,2,3],1))



// masala 10
// function exsplise (arr){
//     arr.pop()
//     return arr;
// }
// console.log(exsplise([1,2,3]))

// // masala 11
// function exsplise (arr){
//     arr.shift()
//     return arr;
// }
// console.log(exsplise([1,2,3]))

// // masala12
// function exsplise (arr, element){
//     arr.unshift(element)
//     return arr;
// }
// console.log(exsplise([1,2,3],1))

// masala 13
// function exsplise (arr, element){
//         let res =arr.includes(element)
//         return res;
//     }
//     console.log(exsplise([1,2,3],1))

// // masala 14
// function exsplise (arr, element){
//     let res = arr.indexOf(element)
//     return res;
// }
// console.log(exsplise([1,2,3],1))

// masala 15
// function exsplise (arr, element){
//     let res = arr.lastIndexOf(element)
//     return res;
// }
// console.log(exsplise([1,2,3],2))

// masala 16
// function exsplise (arr){
//         arr.splice(2,2)
//         return arr;
//     }
//     console.log(exsplise([1,2,3,66,88,44,22,99]))

