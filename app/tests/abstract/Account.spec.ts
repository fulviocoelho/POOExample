/// <reference types="mocha" />

import { expect } from 'chai';
import Account from '../../src/abstract/Account';
import UsefullFactory from '../../src/factory/UsefullFactory';
import IAccountInfo from '../../src/interfaces/IAccountInfo';
import IOptions from '../../src/interfaces/IOptions';
import Logs from '../../src/usefull/Logs';

const account_info: IAccountInfo = {
    client_id: '',
    account_type: 1,
    balance: 10,
    account_number: 123456
}

class FakeAccount extends Account {

    constructor(account_info: IAccountInfo, options: IOptions){
        super(
            account_info, 
            {
                usefull: {
                    createLogs: () => {
                        return {
                            info: () => {},
                            error: () => {},
                        } as unknown as Logs
                    },
                    createMath: () => { return new UsefullFactory().createMath() }
                } as UsefullFactory
            } as IOptions
        );
    }

    public withdraw(value: number) {
        return value
    }
    public deposit(value: number) {
        return value
    }
    public publicValidateWithdraw(value: number){
        try {
            this.validateWithdraw(value);
            return true
        } catch (err) {
            return false
        }
    }
    public publicValidateDeposit(value: number){
        try {
            this.validateDeposit(value);
            return true
        } catch (err) {
            return false
        }
    }
}

describe('Account Abstract Class Test', () => {
    it('SUCCESS: Withdraw Method', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const withdraw_value: number = 10;
        expect(account.withdraw(withdraw_value)).to.be.eq(withdraw_value);
    });
    it('SUCCESS: Deposit Method', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const deposit_value: number = 50;
        expect(account.deposit(deposit_value)).to.be.eq(deposit_value);
    });
    it('SUCCESS: Validate Withdraw Method', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const withdraw_value: number = account_info.balance;

        if(!(account instanceof FakeAccount)){
            throw new Error();
        }

        expect(account.publicValidateWithdraw(withdraw_value)).to.be.eq(true);
    });
    it('ERROR: Validate Withdraw Method With Withdraw Bigger then Balance', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const withdraw_value: number = account_info.balance + 10;

        if(!(account instanceof FakeAccount)){
            throw new Error();
        }

        expect(account.publicValidateWithdraw(withdraw_value)).to.be.eq(false);
    });
    it('ERROR: Validate Withdraw Method With Negative Value', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const withdraw_value: number = account_info.balance * -1;

        if(!(account instanceof FakeAccount)){
            throw new Error();
        }

        expect(account.publicValidateWithdraw(withdraw_value)).to.be.eq(false);
    });
    it('SUCCESS: Validate Deposit Method', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const deposit_value: number = 1;

        if(!(account instanceof FakeAccount)){
            throw new Error();
        }

        expect(account.publicValidateDeposit(deposit_value)).to.be.eq(true);
    });
    it('ERROR: Validate Deposit Method With Negative Value', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);
        const deposit_value: number = -1;

        if(!(account instanceof FakeAccount)){
            throw new Error();
        }

        expect(account.publicValidateDeposit(deposit_value)).to.be.eq(false);
    });
    it('SUCCESS: balance Method', () => {
        const account: Account = new FakeAccount(account_info, {} as IOptions);

        expect(account.balance).to.be.eq(account_info.balance);
    });
});