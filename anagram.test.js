const anagram = require('./anagram');

describe('Testing Anagram', function () {
    it('should be defined', function () {
        expect(anagram).toBeDefined();
    });

    it('should be get chunked array', function () {
        expect(anagram('cenima', 'iceman')).toBeTruthy();
    });

    it('should be get chunked array', function () {
        expect(anagram('Hello', 'Ola')).toBeFalsy();
    });
});