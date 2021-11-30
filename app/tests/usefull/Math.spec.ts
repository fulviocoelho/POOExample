/// <reference types="mocha" />

import { expect } from 'chai';
import Math from '../../src/usefull/Math';

describe('Math Class Test', () => {
    it('SUCCESS: is Positive Method', () => {
        const math: Math = new Math();
        expect(math.isPositive(1)).to.be.eq(true);
    });
    it('ERROR: is Positive Method', () => {
        const math: Math = new Math();
        expect(math.isPositive(-1)).to.be.eq(false);
    });
    it('SUCCESS: is Negative Method', () => {
        const math: Math = new Math();
        expect(math.isNegative(-1)).to.be.eq(true);
    });
    it('ERROR: is Negative Method', () => {
        const math: Math = new Math();
        expect(math.isNegative(1)).to.be.eq(false);
    });
    it('SUCCESS: can Subtract Method', () => {
        const math: Math = new Math();
        expect(math.canSubstract({ number: 2, subtracted: 1 })).to.be.eq(true);
    });
    it('ERROR: can Subtract Method', () => {
        const math: Math = new Math();
        expect(math.canSubstract({ number: 0, subtracted: 1 })).to.be.eq(false);
    });
});