/// <reference types="mocha" />

import { expect } from 'chai';
import UsefullFactory from '../../src/factory/UsefullFactory';
import Logs from '../../src/usefull/Logs';
import Math from '../../src/usefull/Math';

describe('Usefull Factory Class Test', () => {
    it('SUCCESS: Create Logs Method', () => {
        const usefull: UsefullFactory = new UsefullFactory();
        expect(usefull.createLogs() instanceof Logs).to.be.eq(true);
    });
    it('SUCCESS: Create Math Method', () => {
        const usefull: UsefullFactory = new UsefullFactory();
        expect(usefull.createMath() instanceof Math).to.be.eq(true);
    });
});