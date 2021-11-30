/// <reference types="mocha" />

import { expect } from 'chai';
import Database from '../../src/abstract/Database';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IDatabaseInfo from '../../src/interfaces/IDatabaseInfo';
import MongoDB from '../../src/repository/MongoDB';
import MongoDBDriver from '../../src/repository/MongoDBDriver';
import Logs from '../../src/usefull/Logs';

const database_info: IDatabaseInfo = {
    user: 'user',
    pass: 'pass',
    host: 'host'
}

const fakeUsefull = {
    createLogs: () => {
        return {
            info: () => {}
        } as unknown as Logs
    }
} as UsefullFactory

const fakeDriver = {
    connect: () => {},
    colection: () => { return fakeDriver },
    getItem: (get_value: string) => get_value,
    putItem: () => {},
    updateItem: () => {},
    deleteItem: () => {},
} as unknown as MongoDBDriver

describe('MongoDB Class Test', () => {
    it('SUCCESS: Connect Method', () => {
        const database: Database = new MongoDB(database_info, fakeUsefull, fakeDriver);
        
        if(!(database instanceof MongoDB)){
            throw new Error()
        }

        expect(database.connect()).not.to.throw;
    });
    it('SUCCESS: Fetch Method', () => {
        const database: Database = new MongoDB(database_info, fakeUsefull, fakeDriver);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result = database.fetch(table_name, obj);
        expect(result).to.be.eq(obj);
    });
    it('SUCCESS: Insert Method', () => {
        const database: Database = new MongoDB(database_info, fakeUsefull, fakeDriver);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        expect(database.insert(table_name, obj)).not.to.throw;
    });
    it('SUCCESS: Update Method', () => {
        const database: Database = new MongoDB(database_info, fakeUsefull, fakeDriver);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result = database.fetch(table_name, obj);
        expect(database.update(table_name, obj)).not.to.throw;
    });
    it('SUCCESS: Delete Method', () => {
        const database: Database = new MongoDB(database_info, fakeUsefull, fakeDriver);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result = database.fetch(table_name, obj);
        expect(database.delete(table_name, obj)).not.to.throw;
    });
});