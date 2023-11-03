console.log("Hello World!");
//binary search

const binarySearch = (nums, target) => {
    let startIndex = 0;
    let lengthOfStr = nums.length;
    while (startIndex < lengthOfStr) {
        let middleValue = startIndex + Math.floor((lengthOfStr - startIndex) / 2);
        if (target > nums[middleValue]) {
            startIndex = middleValue + 1;
        } else {
            lengthOfStr = middleValue;
        }
    }
    return startIndex;
}

console.log(binarySearch([1, 3, 6, 8], 7));

const binarysearch1 = (arr, k) => {
    let startIndex = 0;
    let lengthOfArr = arr.length;
    while (startIndex < lengthOfArr) {
        let middleValue = startIndex + Math.floor((lengthOfArr - startIndex) / 2);
        if (k > arr[middleValue]) {
            startIndex = middleValue + 1;
        } else {
            lengthOfArr = middleValue;
        }
    }
    return startIndex;
}

console.log("last", binarysearch1([3, 6, 88, 44], 50));

const findCommentElements = (arr1, arr2, arr3) => {
    const commentEle = [];
    let i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            commentEle.push(arr1[i]);
            i++
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return commentEle;
}

console.log("findCommon", findCommentElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]))

// remove Duplicate

const removeDup = (arr) => {
    const common = [];
      for(let i = 0; i< arr.length; i++){
       if(common.indexOf(arr[i]) === -1){
           common.push(arr[i])
       }
      }
      return common;
  }

 console.log(removeDup([2,5,7,5,3,55,3]));

 // Find the Index of the First Occurrence in a String

//Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

 const strStr = function(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    for(let i = 0; i<= haystackLength - needleLength; i++){
      if(haystack.substring(i, i + needleLength) === needle){
          return i;
    }
    }
       return -1;
};

//Plus one
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


const plusOne = (digits) => {
    const lengthOfDigits = digits.length;
    for(let i = lengthOfDigits - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }else{
            return digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}
console.log(plusOne([4, 3, 2, 1]));

