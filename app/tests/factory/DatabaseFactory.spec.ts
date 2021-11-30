/// <reference types="mocha" />

import { expect } from 'chai';
import DatabaseFactory from '../../src/factory/DatabaseFactory';
import IDatabaseInfo from '../../src/interfaces/IDatabaseInfo';
import MongoDB from '../../src/repository/MongoDB';

const connection_info: IDatabaseInfo = {
    host: 'host',
    user: 'user',
    pass: 'pass'
}

describe('Database Factory Class Test', () => {
    it('SUCCESS: Create Method', () => {
        class FakeMongoDB {
            constructor() {

            }

            connect() {
                
            }
        }

        expect(new DatabaseFactory(connection_info, new FakeMongoDB() as MongoDB).create() instanceof FakeMongoDB).to.be.eq(true);
    });
});