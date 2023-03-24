function anagrams(str1, str2) {
  // Your code here
  let set=new Set();
  for(let i=0;i<str1.length;i++){
    set.add(str1[i]);
  }
  for(let i=0;i<str2.length;i++){
    if(!set.has(str2[i])) return false;
  }
  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let set=new Set();
  let result=[];
  for(let i=0;i<arr1.length;i++){
    set.add(arr1[i]);
  }
  for(let i=0;i<arr2.length;i++){
    if(set.has(arr2[i])) result.push(arr2[i]);
  }
  return result;
}


function duplicate(arr) {
  // Your code here
  let set=new Set();
  for(let i=0;i<arr.length;i++){
    if(set.has(arr[i])) return arr[i];
    set.add(arr[i]);
  }
}


function twoSum(nums, target) {
  // Your code here
  let set=new Set();
  for(let i=0;i<nums.length;i++){
    if(set.has(target-nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  let map=new Map();
  let set=new Set();
  let arr=strings;
  if(pattern.length!==arr.length) return false;
  for(let i=0;i<pattern.length;i++){
    if(map.has(pattern[i])){
      if(map.get(pattern[i])!==arr[i]) return false;
    }else{
      if(set.has(arr[i])) return false;
      map.set(pattern[i],arr[i]);
      set.add(arr[i]);
    }
  }
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];