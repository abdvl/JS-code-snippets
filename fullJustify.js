var fullJustify = function(words, maxWidth) {
    let index = 0;
    let sentences = [];
    for (let word of words) {        
        if (!sentences[index]) {
            sentences[index] = '';
        }
        
        if (sentences[index].length + word.length < maxWidth + 1) {
            sentences[index] += `${word} `;
        } else {
            index++;
            sentences[index] = `${word} `;
        }
    }
    
    return sentences
        .map((sentence) => sentence.trim())
        .map((sentence, i) => {
            let isLastWord = i === sentences.length - 1;
            let numberOfWords = sentence.split(' ').length - 1;

            if (numberOfWords === 0 || isLastWord) {
                return sentence + ' '.repeat(maxWidth - sentence.length);
            }

            let newSentence = sentence;

            while (newSentence.length < maxWidth) {
                for (let i = 0; i < newSentence.length; i++) {
                    if (newSentence.length < maxWidth && newSentence[i] === ' ' && newSentence[i+1] !== ' ') {
                        newSentence = newSentence.slice(0, i) + ' ' + newSentence.slice(i);
                        i++;
                    }
                }
            }

            return newSentence;
        });
};
