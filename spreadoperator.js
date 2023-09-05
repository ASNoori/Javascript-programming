const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

function mergeAndRemoveDuplicates(array1, array2) {
    const mergedArray = [...array1, ...array2]; // Using spread operator to merge arrays
    const uniqueArray = [...new Set(mergedArray)]; // Using Set to remove duplicates and then spreading it back to an array
    return uniqueArray;
  }
  
  const mergedArray = mergeAndRemoveDuplicates(array1, array2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5]
  

