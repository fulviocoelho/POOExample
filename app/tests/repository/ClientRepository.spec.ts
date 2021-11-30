/// <reference types="mocha" />

import { expect } from 'chai';
import Database from '../../src/abstract/Database';
import Repository from '../../src/abstract/Repository';
import UsefullFactory from '../../src/factory/UsefullFactory';
import ClientRepository from '../../src/repository/ClientRepository';
import Logs from '../../src/usefull/Logs';

const fakeUsefull = {
    createLogs: () => {
        return {
            error: () => {}
        } as unknown as Logs
    }
} as unknown as UsefullFactory

describe('Client Repository Class Test', () => {
    it('SUCCESS: Get Client Info Method', () => {
        const obj = {key: 'propertie'}
        const fakeDatabase = {
            fetch: () => { return obj }
        } as unknown as Database;

        const repository: Repository = new ClientRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof ClientRepository)){
            throw new Error();
        }

        expect(repository.getClientInfo('123456789')).to.be.eq(obj);
    });

    it('SUCCESS: Get Client Info With Returned Array Method', () => {
        const obj = {key: 'propertie'}
        const fakeDatabase = {
            fetch: () => { return [obj] }
        } as unknown as Database;

        const repository: Repository = new ClientRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof ClientRepository)){
            throw new Error();
        }

        expect(repository.getClientInfo('123456789')).to.be.eq(obj);
    });

    it('ERROR: Database Return is Not a Object', () => {
        const obj = {key: 'propertie'}
        const fakeDatabase = {
            fetch: () => { return ['asdasd'] }
        } as unknown as Database;

        const repository: Repository = new ClientRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof ClientRepository)){
            throw new Error();
        }

        try{
            repository.getClientInfo('123456789')
        } catch (err) {
            expect(err).not.to.be.null;
        }
    });
});