const reverseString = require('./reverse')

describe('Testing Reverse String', function () {
    it('should be defined', function () {
        expect(reverseString).toBeDefined();
    });

    it('should reverse string', function () {
        expect(reverseString('hello')).toEqual('olleh');
    });

    it('should reverse string', function () {
        expect(reverseString('Hello')).toEqual('olleh');
    });
});