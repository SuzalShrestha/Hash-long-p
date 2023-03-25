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
    let obj={};
    //list all occurence of each number
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    let keys=Object.keys(obj);
    let pairs=[];
    //find all pairs of numbers that are 1 apart
    for(let i=0;i<keys.length;i++){
        let current=keys[i];
        for(let j=i+1;j<keys.length;j++){
            if(Math.abs(current-keys[j])<=1){
                pairs.push([current,keys[j]]);
            }
        }
    }
    //find the longest subarray
    if(pairs.length===0){
        return 0;
    }
    let longestpair=pairs[0];
    let longest=obj[longestpair[0]]+obj[longestpair[1]];
    if(pairs.length===1){
        return longest;
    }
    for(let i=1;i<pairs.length-1;i++){
        let current=pairs[i];
        let currentlength=obj[current[0]]+obj[current[1]];
        if(currentlength>longest){
            longestpair=current;
            longest=currentlength;
        }
    } 
       return longest;
}

console.log(maxSubarr([1,3,2,2,5,2,3,7])); // => 5 because the longest subarray is [3,2,2,2,3]
console.log(maxSubarr([1,1,1,1,3]));// => 4 because the longest subarray is [1,1,1,1]