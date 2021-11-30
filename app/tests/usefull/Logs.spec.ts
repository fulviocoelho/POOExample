/// <reference types="mocha" />

import { expect } from 'chai';
import Logs from '../../src/usefull/Logs';

describe('Logs Class Test', () => {
    it('SUCCESS: Logs Info With Object Method', () => {
        const logs: Logs = new Logs(() => {});
        expect(logs.info({})).to.not.throw;
    });
    it('SUCCESS: Logs Info With Array Method', () => {
        const logs: Logs = new Logs(() => {});
        expect(logs.info([])).to.not.throw;
    });
    it('SUCCESS: Logs Warning With Object Method', () => {
        const logs: Logs = new Logs(() => {});
        expect(logs.alert({})).to.not.throw;
    });
    it('SUCCESS: Logs Warning With Array Method', () => {
        const logs: Logs = new Logs(() => {});
        expect(logs.alert([])).to.not.throw;
    });
    it('SUCCESS: Logs Error With Object Method', () => {
        const logs: Logs = new Logs(() => {});
        expect(logs.error({})).to.not.throw;
    });
    it('SUCCESS: Logs Error With Array Method', () => {
        const logs: Logs = new Logs(() => {});
        expect(logs.error([])).to.not.throw;
    });
});