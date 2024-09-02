/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const splitItem1 = word1.split('');
    const splitItem2 = word2.split('');
    let result = ''
    if (splitItem1.length >= splitItem2.length) {
        for (let i = 0; i < splitItem1.length; i++) {
            const secondWord = splitItem2[i] != undefined ? splitItem2[i] : ''
            result += splitItem1[i] + secondWord
        }
    } else {
        for (let i = 0; i < splitItem2.length; i++) {
            const firstWord = splitItem1[i] != undefined ? splitItem1[i] : ''
            result += firstWord + splitItem2[i]

        }
    }
   
    return result;
};

const word1 = "ab";
const word2 = "pqrs"
mergeAlternately(word1, word2)