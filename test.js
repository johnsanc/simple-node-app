const assert = require('assert');
const utils = require('./utils');

describe('Utils', () => {
    describe('getModifiedString()', () => {
        it('should return correct string after inputting valid string and interval', () => {
            // Arrange
            const input = 'iamyourlyftdriver';
            const interval = 3;
            const expected = 'muydv';

            // Act
            const actual = utils.getModifiedString(input, interval);

            // Assert
            assert.equal(actual, expected);
        });

        it('should return an empty string if input string length less than interval', () => {
            // Arrange
            const input = 'hi';
            const interval = 3;
            const expected = '';

            // Act 
            const actual = utils.getModifiedString(input, interval);

            // Assert
            assert.equal(actual, expected);
        });

        it('should return an empty string if input string is empty', () => {
            // Arrange
            const input = '';
            const interval = 3;
            const expected = '';

            // Act 
            const actual = utils.getModifiedString(input, interval);

            // Assert
            assert.equal(actual, expected);
        });

        it('should return entire input string if interval is set to 1', () => {
            // Arrange
            const input = 'Hello, world!';
            const interval = 1;
            const expected = 'Hello, world!';

            // Act 
            const actual = utils.getModifiedString(input, interval);

            // Assert
            assert.equal(actual, expected);
        });

        it('should return an empty string if interval is 0 or negative', () => {
            // Arrange
            const input = 'Hello, world!';
            const interval = -1;
            const expected = '';

            // Act 
            const actual = utils.getModifiedString(input, interval);

            // Assert
            assert.equal(actual, expected);
        });
    });
});