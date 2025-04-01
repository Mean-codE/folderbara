/**
 * 1. Terdapat array dengan nilai sebagai berikut
 [ 19 , 7 , 24 , 1 , 76 , 3 , 9 , 7 ]
 * * 1. Tentukan jika nilai target terdapat pada array atau tidak
 * 2. Jika terdapat pada array , kembalikan index array tersebut
 * 3. Jika tidak terdapat pada array , kembalikan -1
 * * Nilai Target
 * a. 7
 * b. 33
 */

const arrayExample = [19, 7, 24, 1, 76, 3, 9, 7];

const linearSearchAlgorithm = (arrayData, targetValue) => {
  // for (let i = 0; i < arrayData.length; i++) {
  //   if (arrayData[i] === targetValue) {
  //     return i;
  //   }
  // }
  // return -1;

  return (returnWithMethid = arrayData.findIndex((element) => {
    return element === targetValue;
  }));
};

const result = linearSearchAlgorithm(arrayExample, 7);
console.log(result);

const result2 = "wow";

const result3 = "wow2";

const result4 = "wow3";

const result5 = "wowsekali";
