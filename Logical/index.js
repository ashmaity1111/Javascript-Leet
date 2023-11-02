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
