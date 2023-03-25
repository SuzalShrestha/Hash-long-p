let kthMostFrequent=(string,k)=>{
    let obj={};
    for(let i=0;i<string.length;i++){
        if(obj[string[i]]){
            obj[string[i]]++;
        }else{
            obj[string[i]]=1;
        }
    }
    let arr=Object.keys(obj);
    arr.sort((a,b)=>b-a);
    return arr[k-1];
}
let newAlphabet=(string,order)=>{
    let arr=order.split('');
    let currentIndex=0;
    for(let i=0;i<string.length;i++){
        let currentLetter=string[i];
        if(arr.indexOf(currentLetter)<currentIndex){
            return false;
        }else{
            currentIndex=arr.indexOf(currentLetter);
        }

    }
    return true;
}
//finds longest palindrome in a string
// let longestPalindrome=(string)=>{
//     let obj={};
//     for(let i=0;i<string.length;i++){
//         if(obj[string[i]]){
//             obj[string[i]]++;
//         }else{
//             obj[string[i]]=1;
//         }
//     }
//     let arr=Object.keys(obj);
//     let longest=[];
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]%2===0){
//             for(let j=0;j<obj[arr[i]];j++){
//                 longest.splice(longest.length/2,0,arr[i]);
//             }
//         }
//     }
//     for(let item of arr){
//         if(obj[item]%2===1){   
//         longest.splice(longest.length/2,0,item);
//         break;
//         }
//     }
//     return longest.join('');
// }
let longestPalindrome=(string)=>{
    let obj={};
    for(let i=0;i<string.length;i++){
        if(obj[string[i]]){
            obj[string[i]]++;
        }else{
            obj[string[i]]=1;
        }
    }
    let arr=Object.keys(obj);
    let longest=0;
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]%2===0){
            longest+=obj[arr[i]];
        }
    }
    return longest+1;
}
let longestSubstr=(str)=>{
    let occurence=[];
    let string=str.split('');
    let longest=string.forEach((item=>{
        if(occurence.indexOf(item)===-1){
            occurence.push(item);
        }
    }));
    return occurence.length;
}
let maxSubarr=(arr)=>{
    
}
let coinChange=(coins,target)=>{
    const coinsarr=coins.sort((a,b)=>b-a);
    const result=[];
    if(target===0) return 0;
    for(let coin of coinsarr){
        while(target>=coin){
            target -=coin;
            result.push(coin);
        }
    }
    if(target>0) return -1;
    return result.length;
};
// const coins = [1, 5, 10, 25];
// const coins2 = [5];

// console.log(coinChange(coins, 11));      // => 2, 10 + 1 = 11
// console.log(coinChange(coins2, 3));      // => -1
// console.log(coinChange(coins2, 0));      // => 0
// console.log(coinChange(coins, 100));     // => 4, 25 + 25 + 25 + 25 = 100
let climbingsStairs=(n)=>{
    let arr=[];
    arr[0]=1;
    arr[1]=1;
    arr[2]=2;
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]+arr[i-3];
    }
    return arr[n];
}
// console.log(climbingsStairs(1));
// console.log(climbingsStairs(2));
// console.log(climbingsStairs(3));
// console.log(climbingsStairs(4));