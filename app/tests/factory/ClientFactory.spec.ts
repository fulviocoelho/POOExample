/// <reference types="mocha" />

import { expect } from 'chai';
import Client from '../../src/abstract/Client';
import Database from '../../src/abstract/Database';
import ElderClient from '../../src/business/ElderClient';
import TaxPayerClient from '../../src/business/TaxPayerClient';
import account_types from '../../src/constants/AccountTypes';
import code_messages from '../../src/constants/CodeMessages';
import ClientFactory from '../../src/factory/ClientFactory';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IAccountInfo from '../../src/interfaces/IAccountInfo';
import IClientInfo from '../../src/interfaces/IClientInfo';
import IOptions from '../../src/interfaces/IOptions';
import AccountRepository from '../../src/repository/AccountRepository';
import Logs from '../../src/usefull/Logs';

const fakeUsefull = {
    createLogs: () => {
        return {
            info: () => {},
            error: (val: string | undefined) => {throw new Error(val)}
        } as unknown as Logs;
    },
    createMath: () => {}
} as unknown as UsefullFactory;

describe('Client Factory Class Test', () => {
    it('SUCCESS: Create Method Returns Elder Client', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 61,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: account_types.savings,
            balance: 0,
        } as unknown as IClientInfo & IAccountInfo ;
        const fakeOptions: IOptions = {
            database: {
                fetch: () => client_test_info
            } as unknown as Database,
            usefull: fakeUsefull
        }

        const client: Client = new ClientFactory(client_test_info.client_id, fakeOptions).create();
        expect(client instanceof ElderClient).to.be.eq(true);
    });
    it('SUCCESS: Create Method Returns Tax Payer Client', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 30,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: account_types.savings,
            balance: 0,
        } as unknown as IClientInfo & IAccountInfo ;
        const fakeOptions: IOptions = {
            database: {
                fetch: () => client_test_info
            } as unknown as Database,
            usefull: fakeUsefull
        }

        const client: Client = new ClientFactory(client_test_info.client_id, fakeOptions).create();
        expect(client instanceof TaxPayerClient).to.be.eq(true);
    });
    it('ERROR: Create Method Wont Receive Correct Repository', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 30,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: account_types.savings,
            balance: 0,
        } as unknown as IClientInfo & IAccountInfo ;
        const fakeOptions: IOptions = {
            database: {
                fetch: () => client_test_info
            } as unknown as Database,
            usefull: fakeUsefull,
            repository: {} as AccountRepository
        }

        try{
            new ClientFactory(client_test_info.client_id, fakeOptions).create()
        }catch(err){
            expect(`${err}`).to.be.eq(`Error: ${code_messages.repository_is_not_client_repository}`);
        }
    });
    it('ERROR: Create Method Throws Error on Unknown Repository', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 30,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: account_types.savings,
            balance: 0,
        } as unknown as IClientInfo & IAccountInfo ;
        const fakeOptions: IOptions = {
            database: {
                fetch: () => client_test_info
            } as unknown as Database,
            usefull: {
                createLogs: () => {
                    return {
                        info: () => {},
                        error: () => {}
                    } as unknown as Logs;
                },
                createMath: () => {}
            } as unknown as UsefullFactory,
            repository: {} as AccountRepository
        }

        try{
            new ClientFactory(client_test_info.client_id, fakeOptions).create()
        }catch(err){
            expect(err).not.to.be.null;
        }
    });
});