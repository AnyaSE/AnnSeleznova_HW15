const sentanceTest = 'london is the capital of great britain its political economic and cultural centre';

function longestWord (string) {
    if (typeof string === 'string') {
        const array = string.split(" ");
        let result = '';
        for (let i = 0; i < array.length; i++) {
            const arrayElement = array[i];
            if (arrayElement.length > result.length) {
                result = arrayElement;
            }         
        }
        return result;
    } else {
        console.log ('The input is not a string');
        return '';
    }
};

console.log (longestWord(sentanceTest));