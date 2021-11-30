/// <reference types="mocha" />

import { expect } from 'chai';
import Database from '../../src/abstract/Database';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IDatabaseInfo from '../../src/interfaces/IDatabaseInfo';

const database_info: IDatabaseInfo = {
    user: 'user',
    pass: 'pass',
    host: 'host'
}

class FakeDatabase extends Database {
    public fetch (table_name: string, objeto: object) {
        return { table_name, objeto }
    }
    public insert (table_name: string, objeto: object) {
        return { table_name, objeto }
    }
    public update (table_name: string, objeto: object) {
        return { table_name, objeto }
    }
    public delete (table_name: string, objeto: object) {
        return { table_name, objeto }
    }
}

const fakeUsefull = {
    createLogs: () => {}
} as UsefullFactory

describe('Database Abstract Class Test', () => {
    it('SUCCESS: Fetch Method', () => {
        const database: Database = new FakeDatabase(database_info, fakeUsefull);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result: any = database.fetch(table_name, obj);
        expect(result.table_name).to.be.eq(table_name);
        expect(result.objeto).to.be.eq(obj);
    });
    it('SUCCESS: Update Method', () => {
        const database: Database = new FakeDatabase(database_info, fakeUsefull);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result: any = database.update(table_name, obj);
        expect(result.table_name).to.be.eq(table_name);
        expect(result.objeto).to.be.eq(obj);
    });
    it('SUCCESS: Delete Method', () => {
        const database: Database = new FakeDatabase(database_info, fakeUsefull);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result: any = database.delete(table_name, obj);
        expect(result.table_name).to.be.eq(table_name);
        expect(result.objeto).to.be.eq(obj);
    });
    it('SUCCESS: Insert Method', () => {
        const database: Database = new FakeDatabase(database_info, fakeUsefull);
        const table_name: string = 'table01';
        const obj: object = { name: 'teste' };
        const result: any = database.insert(table_name, obj);
        expect(result.table_name).to.be.eq(table_name);
        expect(result.objeto).to.be.eq(obj);
    });
});