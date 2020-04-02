const chunk = require('./chunk')

describe('Testing Chunk', function () {
    it('should be defined', function () {
        expect(chunk).toBeDefined();
    });

    it('should be get chunked array', function () {
        expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([[1, 2, 3],[4, 5, 6],[7]]);
    });
});