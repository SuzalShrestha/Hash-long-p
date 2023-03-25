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
