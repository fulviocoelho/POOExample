import Account from "../abstract/Account";

export default class SavingsAccount extends Account {
    public withdraw(value: number) {
        this.validateWithdraw(value);

        this._balance = this._balance - value;
    }

    public deposit(value: number) {
        this.validateDeposit(value);

        this._balance = this._balance + value;
    } 
}