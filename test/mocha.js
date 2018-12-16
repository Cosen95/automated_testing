const { should, expect, assert } = require('chai');
const { add, mul } = require('../src/math');

describe('#math', () => {
    describe('add', () => {
        it('should return 5 when 2 + 3', () => {
            expect(add(2,3),5);
        });

        it('should return -1 when 2 + -3', () => {
            expect(add(2,-3),5);
        })
    });

    describe('mul', () => {
        it('should return 10 when 2 * 5', () => {
            expect(mul(2,5),10);
        })
    })
})