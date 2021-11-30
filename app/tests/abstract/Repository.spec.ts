/// <reference types="mocha" />

import { expect } from 'chai';
import Database from '../../src/abstract/Database';
import Repository from '../../src/abstract/Repository';
import UsefullFactory from '../../src/factory/UsefullFactory';

class FakeRepository extends Repository {
    public getDatabase () {
        return this.database;
    }
    public getLogs () {
        return this.logs
    }
}

const fakeUsefull = {
    createLogs: () => { return 'logs' }
} as unknown as UsefullFactory

const fakeDatabase = 'database' as unknown as Database;

describe('Repository Abstract Class Test', () => {
    it('SUCCESS: Fetch Method', () => {
        const repository: Repository = new FakeRepository({ database: fakeDatabase, usefull: fakeUsefull });

        if(!(repository instanceof FakeRepository)){
            throw new Error();
        }

        expect(repository.getDatabase()).to.be.eq(fakeDatabase);
        expect(repository.getLogs()).to.be.eq('logs');
    });
});