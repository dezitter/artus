export default function contains(text='', words=[]) {
    text = text.toLowerCase();

    return words.some((word) => {
        word = word.toLowerCase();
        return text.indexOf(word) !== -1;
    });
}
