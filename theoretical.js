function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}
//conole.log(lengthOfString("hello1")) ----> output 6



function sumOfArray(arr) {
  // This function returns the sum of all of the numbers in a given array.
  if (array.length === 0) {
    return 0
  } else {
    return arr.length + sumOfArray(([1,2,3,4]))
  }
}
console.log(sumOfArray([1,2,3,4]))



function findMax(arr) {
  // This function returns the largest number in a given array.
  if(arr.length === 1) {
    return 0
  } else {
    const rec = String.findmax([arr])
    const split = arr.split("")
  }
}
const arr = [2,5,1,0,8,4,6,]
// console.log(findMax())



function factorial(int) {
  // This function returns the factorial of a given number.
  if(int === 0 ) {
    return 1
  } else {
    return n*(factorial*(int-1))
  }
}
const num = 3
// console.log(factorial(num)) ---> 3



function fibonacci(int) {
  if(int === 1 || int === 2){
    return 1 
  } else {
    return fibonacci(int-1) + fibonacci(int-2)
  }
}
// console.log(fibancci(6)) ----> 8



function coinFlips(odds) {
  const results = []
  function makeResults (current, remaining) {
    if(remaining === 0) {
      results.push(current)
    } else {
      const heads = "H"
      const tails = "T"
      makeResults(`current ${heads}, remaining -1`)
      makeResults(`current ${tails}, remaining -1`)
    }
  }
  makeResults()
}
// console.log(coinFlips(2)) ---> [HH, TT, HT, TH]

function letterCombinations() {
  const combinations = []
  function findCombinations (current, remaining)
  if(0){
    //i really am lost with this one. 
  }
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
//---------------------------------------------------------------//

// mocha.setup('bdd');
// const expect = chai.expect;

// describe('findMax', ()=>{
//     it('should find the largest number in an array', ()=>{
//         let testArray = [3,4,2,1,2];
//         expect(findMax(testArray)).to.equal(4);
//     });
//     it('should work for negative numbers', ()=>{
//         let testNegatives = [-1, -4, -2];
//         expect(findMax(testNegatives)).to.equal(-1);
//     });
// })

// describe('factorial', ()=>{
//     it('should accurately calculate factorials', ()=>{
//         expect(factorial(3)).to.equal(6);
//         expect(factorial(5)).to.equal(120);
//     });
// })

// describe('fibonacci', ()=>{
//     it('should accurately return base cases', ()=>{
//         expect(fibonacci(1)).to.equal(1);
//         expect(fibonacci(2)).to.equal(1);
//     });
//     it('should accurately calculate subsequent numbers', ()=>{
//         expect(fibonacci(3)).to.equal(2);
//         expect(fibonacci(4)).to.equal(3);
//         for(let i = 3; i < 10; i++){
//             expect(fibonacci(i)).to.equal(fibonacci(i-1)+fibonacci(i-2));
//         }
//     });
// })

// describe('coinFlips', ()=>{
//     it('should return an array', ()=>{
//         expect(Array.isArray(coinFlips(2))).to.equal(true);
//     });
//     it("should include all possibilities", ()=>{
//         let results = coinFlips(4);
//         expect(results.includes("HHHH")).to.equal(true);
//         expect(results.includes("HTHT")).to.equal(true);
//         expect(results.includes("TTTT")).to.equal(true);
//         expect(results.length).to.equal(16);
//     });
// })

// describe('letterCombinations', ()=>{
//     it("should return an array", ()=>{
//         expect(Array.isArray(letterCombinations(["a","b","c"]))).to.equal(true);
//     });
//     it("should include single letter results", ()=>{
//         expect(letterCombinations(["a","b","c"]).includes("b")).to.equal(true);
//     });
//     it("should include combinations in different order", ()=>{
//         expect(letterCombinations(["a","b","c"]).includes("ba")).to.equal(true);
//         expect(letterCombinations(["a","b","c"]).includes("ab")).to.equal(true);
//     });
//     it("should include full-length combinations", ()=>{
//         expect(letterCombinations(["a","b","c"]).includes("bac")).to.equal(true);
//         expect(letterCombinations(["a","b","c"]).includes("cab")).to.equal(true);
//     });
// })

// mocha.run()