/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcd(a, b) {
    // Euclidean algorithm to find greatest common divisor
    return b === 0 ? a : gcd(b, a % b);
}

function gcdOfStrings(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const maxLen = gcd(len1, len2);

    const commonSubstring = str1.substring(0, maxLen);

    if (str1 === commonSubstring.repeat(len1 / maxLen) &&
        str2 === commonSubstring.repeat(len2 / maxLen)) {
        return commonSubstring;
    }

    return '';
}
const str1 = "ABCDEF";
const str2 = "ABC";
console.log(gcdOfStrings(str1, str2));