const getModifiedString = (input, interval) => {
    if (interval === 1) {
        return input;
    } else if (interval < 1) {
        return '';
    }

    const letters = input.split('');
    const filteredLetters = letters.filter((letter, index) => {
        if ((index + 1) % interval === 0 && (index + 1) !== letters.length) {
            return true;
        }
        return false;
    });

    return filteredLetters.join('');
};

module.exports = {
    getModifiedString
};