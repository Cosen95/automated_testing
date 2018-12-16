const { should, expect, assert } = require('chai');
const { add, mul, cover } = require('../src/math');

describe('#math', () => {
    describe('add', () => {
        it('should return 5 when add(2,3)', () => {
            expect(add(2,3)).to.equal(5);
        });

        it('should return -1 when add(2,-3)', () => {
            expect(add(2,-3)).to.equal(-1);
        })
    });

    describe('mul', () => {
        it('should return 10 when mul(2,5)', () => {
            expect(mul(2,5)).to.equal(10);
        })
    });

    describe('cover', () => {
        it('should return 1 when cover(2,1)', () => {
            expect(cover(2,1)).to.equal(1);
        });

        it('should return 3 when cover(1,2)', () => {
            expect(cover(1,2)).to.equal(3);
        })

        it('should return 4 when cover(2,2)', () => {
            expect(cover(2,2)).to.equal(4);
        })
    })
})