/// <reference types="mocha" />

import { expect } from 'chai';
import Account from '../../src/abstract/Account';
import Client from '../../src/abstract/Client';
import Actions from '../../src/business/Actions';
import ChekingAccount from '../../src/business/CheckingAccount';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IActionRequests from '../../src/interfaces/IActionRequests';
import IOptions from '../../src/interfaces/IOptions';
import Logs from '../../src/usefull/Logs';

const fakeClient = {
    getBalance: () => 'asd',
    deposit: () => {},
    withdraw: () => {},
} as unknown as Client;
const fakeActions: Array<IActionRequests> = [
    {
        type: 'deposit',
        value: 10
    },
    {
        type: 'withdraw',
        value: 10
    },
    {
        type: 'balance'
    }
];
const fakeUsefull = {
    createLogs: () => {
        return {
            info: () => {},
            error: () => {}
        } as unknown as Logs
    }
} as UsefullFactory;

describe('Actions Class Test', () => {
    it('SUCCESS: Execute Method', () => {
        const actions: Actions = new Actions({ client: fakeClient, actions: fakeActions }, fakeUsefull);
        expect(actions.execute()).not.to.throw;
    });
});