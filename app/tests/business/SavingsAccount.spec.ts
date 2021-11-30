/// <reference types="mocha" />

import { expect } from 'chai';
import Account from '../../src/abstract/Account';
import SavingsAccount from '../../src/business/SavingsAccount';
import IAccountInfo from '../../src/interfaces/IAccountInfo';
import IOptions from '../../src/interfaces/IOptions';

const account_info: IAccountInfo = {
    client_id: '',
    account_type: 1,
    balance: 10,
    account_number: 123456
}

describe('Saving Account Class Test', () => {
    it('SUCCESS: Withdraw Method', () => {
        const account: Account = new SavingsAccount(account_info, {} as IOptions);
        const withdraw_value: number = account_info.balance;
        expect(account.withdraw(withdraw_value)).not.to.throw;
    });
    it('SUCCESS: Deposit Method', () => {
        const account: Account = new SavingsAccount(account_info, {} as IOptions);
        const withdraw_value: number = 1;
        expect(account.deposit(withdraw_value)).not.to.throw;
    });
});