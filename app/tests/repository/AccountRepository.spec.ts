/// <reference types="mocha" />

import { expect } from 'chai';
import Database from '../../src/abstract/Database';
import Repository from '../../src/abstract/Repository';
import UsefullFactory from '../../src/factory/UsefullFactory';
import AccountRepository from '../../src/repository/AccountRepository';
import Logs from '../../src/usefull/Logs';

const fakeUsefull = {
    createLogs: () => {
        return {
            error: () => {}
        } as unknown as Logs
    }
} as unknown as UsefullFactory

describe('Account Repository Class Test', () => {
    it('SUCCESS: Get Account Info Method', () => {
        const obj = {key: 'propertie'}
        const fakeDatabase = {
            fetch: () => { return obj }
        } as unknown as Database;

        const repository: Repository = new AccountRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof AccountRepository)){
            throw new Error();
        }

        expect(repository.getAccountInfo('123456789')).to.be.eq(obj);
    });

    it('SUCCESS: Get Account Info With Array Return Method', () => {
        const obj = {key: 'propertie'}
        const fakeDatabase = {
            fetch: () => { return [obj] }
        } as unknown as Database;

        const repository: Repository = new AccountRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof AccountRepository)){
            throw new Error();
        }

        expect(repository.getAccountInfo('123456789')).to.be.eq(obj);
    });

    it('ERROR: Database Return is Not a Object', () => {
        const obj = {key: 'propertie'}
        const fakeDatabase = {
            fetch: () => { return ['asdasd'] }
        } as unknown as Database;

        const repository: Repository = new AccountRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof AccountRepository)){
            throw new Error();
        }

        try{
            repository.getAccountInfo('123456789')
        } catch (err) {
            expect(err).not.to.be.null;
        }
    });
});