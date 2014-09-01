var assert = require('chai').assert;

describe('Strings', function () {
    it('Single quoted and double quoted', function () {
        var singleQuoted = 'i am a string, man';
        var doubleQuoted = 'i am a string too';

        assert.equal('string', typeof singleQuoted);
        assert.equal('__', typeof doubleQuoted);
    });
    it('Using different quote types', function () {
        var mixed = 'i am a "mixed string"';
        var anotherMix = "Wow, such 'mixing'";

        assert.equal('string', typeof mixed);
        assert.equal('__', typeof anotherMix);
    });
});