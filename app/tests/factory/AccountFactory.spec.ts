/// <reference types="mocha" />

import { expect } from 'chai';
import Account from '../../src/abstract/Account';
import Client from '../../src/abstract/Client';
import Database from '../../src/abstract/Database';
import CheckingAccount from '../../src/business/CheckingAccount';
import ElderClient from '../../src/business/ElderClient';
import SavingsAccount from '../../src/business/SavingsAccount';
import TaxPayerClient from '../../src/business/TaxPayerClient';
import account_types from '../../src/constants/AccountTypes';
import code_messages from '../../src/constants/CodeMessages';
import AccountFactory from '../../src/factory/AccountFactory';
import ClientFactory from '../../src/factory/ClientFactory';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IAccountInfo from '../../src/interfaces/IAccountInfo';
import IClientInfo from '../../src/interfaces/IClientInfo';
import IOptions from '../../src/interfaces/IOptions';
import AccountRepository from '../../src/repository/AccountRepository';
import ClientRepository from '../../src/repository/ClientRepository';
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

describe('Account Factory Class Test', () => {
    it('SUCCESS: Create Method Returns Saving Accounts', () => {
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

        const account: Account = new AccountFactory(client_test_info.client_id, fakeOptions).create();
        expect(account instanceof SavingsAccount).to.be.eq(true);
    });
    it('SUCCESS: Create Method Returns Cheking Account', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 30,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: account_types.checkings,
            balance: 0,
        } as unknown as IClientInfo & IAccountInfo ;
        const fakeOptions: IOptions = {
            database: {
                fetch: () => client_test_info
            } as unknown as Database,
            usefull: fakeUsefull
        }

        const account: Account = new AccountFactory(client_test_info.client_id, fakeOptions).create();
        expect(account instanceof CheckingAccount).to.be.eq(true);
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
            repository: {} as ClientRepository
        }

        try{
            new AccountFactory(client_test_info.client_id, fakeOptions).create()
        }catch(err){
            expect(`${err}`).to.be.eq(`Error: ${code_messages.repository_is_not_account_repository}`);
        }
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
            repository: {} as ClientRepository
        }

        try{
            new AccountFactory(client_test_info.client_id, fakeOptions).create()
        }catch(err){
            expect(`${err}`).to.be.eq(`Error: ${code_messages.repository_is_not_account_repository}`);
        }
    });
    it('ERROR: Create Method Throws Error on Unknown Account Type', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 30,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: 1000,
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
            } as unknown as UsefullFactory
        }

        try{
            new AccountFactory(client_test_info.client_id, fakeOptions).create()
        }catch(err){
            expect(err).not.to.be.null;
        }
    });
    it('ERROR: Create Method Throws Error on Unknown Repository', () => {
        const client_test_info = {
            client_id: 'client_id_123',
            age: 30,
            first_name: 'Felipe',
            last_name: 'Rodrigues',
            account_number: 2563,
            account_type: account_types.checkings,
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
            repository: {} as ClientRepository
        }

        try{
            new AccountFactory(client_test_info.client_id, fakeOptions).create()
        }catch(err){
            expect(err).not.to.be.null;
        }
    });
});