// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
    // If the length is 0 (base case), return len (0).
    // if (str.length === 0) return len;
    if (!str.length) return len;
  
    // Remove the first letter of the string
    let restOfString = str.substring(1);
  
    // Call function again, with updated string and len
    return lengthOfString(restOfString, ++len);
  }
  
  function sumOfArray() {
    // This function returns the sum of all of the numbers in a given array.
  }
  
  function findMax() {
    // This function returns the largest number in a given array.
  }
  
  function factorial() {
    // This function returns the factorial of a given number.
  }
  
  function fibonacci() {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  }
  
  function coinFlips() {
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
  }
  
  function letterCombinations() {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
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