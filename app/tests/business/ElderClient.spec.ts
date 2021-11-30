/// <reference types="mocha" />

import { expect } from 'chai';
import Account from '../../src/abstract/Account';
import Client from '../../src/abstract/Client';
import Database from '../../src/abstract/Database';
import ElderClient from '../../src/business/ElderClient';
import AccountFactory from '../../src/factory/AccountFactory';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IClientInfo from '../../src/interfaces/IClientInfo';
import Logs from '../../src/usefull/Logs';

const client_info: IClientInfo = {
    client_id: 'client_id_123',
    age: 20,
    first_name: 'Fernando',
    last_name: 'Pedroso'
}

describe('Tax Payer Client Class Test', () => {
    it('SUCCESS: Fullname Method', () => {
        const fullname: string = `${client_info.first_name} ${client_info.last_name}`;
        const client: Client = new ElderClient(client_info, { 
            database: {} as Database, 
            usefull: {
                createLogs: () => {
                    return {
                        info: () => {}
                    } as unknown as Logs
                }
            } as UsefullFactory,
            accountFactory: {
                create: () => {
                    return {} as unknown as Account
                },
            } as AccountFactory
        })

        expect(client.fullName()).to.be.eq(fullname);
    });
});