/// <reference types="mocha" />

import { expect } from 'chai';
import Account from '../../src/abstract/Account';
import Client from '../../src/abstract/Client';
import Database from '../../src/abstract/Database';
import AccountFactory from '../../src/factory/AccountFactory';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IClientInfo from '../../src/interfaces/IClientInfo';

const client_info: IClientInfo = {
    client_id: 'client_id_123',
    age: 20,
    first_name: 'Fernando',
    last_name: 'Pedroso'
}

describe('Client Class Test', () => {
    it('SUCCESS: Fullname Method', () => {
        const fullname: string = `${client_info.first_name} ${client_info.last_name}`;
        const client: Client = new Client(client_info, { 
            database: {} as Database, 
            usefull: {} as UsefullFactory,
            accountFactory: {
                create: () => {
                    return {} as unknown as Account
                },
            } as AccountFactory
        })

        expect(client.fullName()).to.be.eq(fullname);
    });

    it('SUCCESS: Balance Method', () => {
        const balance: number = 30;
        const client: Client = new Client(client_info, { 
            database: {} as Database, 
            usefull: {} as UsefullFactory,
            accountFactory: {
                create: () => {
                    return {
                        balance
                    } as unknown as Account
                },
            } as AccountFactory
        })

        expect(client.getBalance()).to.be.eq(balance);
    });
    it('SUCCESS: Withdraw Method', () => {
        const value: number = 30;
        const client: Client = new Client(client_info, { 
            database: {} as Database, 
            usefull: {} as UsefullFactory,
            accountFactory: {
                create: () => {
                    return {
                        withdraw: (withdraw_value: number) => {
                            expect(withdraw_value).to.be.eq(value);
                        }
                    } as unknown as Account
                },
            } as AccountFactory
        })

        client.withdraw(value);
    });
    it('SUCCESS: Deposit Method', () => {
        const value: number = 30;
        const client: Client = new Client(client_info, { 
            database: {} as Database, 
            usefull: {} as UsefullFactory,
            accountFactory: {
                create: () => {
                    return {
                        deposit: (withdraw_value: number) => {
                            expect(withdraw_value).to.be.eq(value);
                        }
                    } as unknown as Account
                },
            } as AccountFactory
        })

        client.deposit(value);
    });
});