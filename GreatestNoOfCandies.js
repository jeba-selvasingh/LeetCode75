var kidsWithCandies = function (candies, extraCandies) {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};

const candies = [2,3,5,1,3]
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));