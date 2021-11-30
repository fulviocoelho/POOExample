import UsefullFactory from "../factory/UsefullFactory";
import code_messages from "../constants/CodeMessages";
import IMath from "../interfaces/IMath";
import ILogs from "../interfaces/ILogs";
import IAccountInfo from "../interfaces/IAccountInfo";
import IOptions from "../interfaces/IOptions";

export default abstract class Account {
    protected account_number: number;
    protected _balance: number;
    protected math: IMath;
    protected logs: ILogs;

    constructor({ account_number, balance }: IAccountInfo, { usefull = new UsefullFactory() }: IOptions) {
        this.account_number = account_number;
        this._balance = balance;
        this.math = usefull.createMath();
        this.logs = usefull.createLogs();
    }

    public abstract withdraw(value: number): void
    public abstract deposit(value: number): void

    public get balance(): number {
        return this._balance;
    }

    protected validateWithdraw(value: number) {
        if(this.math.isNegative(value)) {
            this.logs.error(code_messages.negative_value_for_withdraw);
            throw new Error();
        }

        if(!this.math.canSubstract({number: this._balance, subtracted: value})){
            this.logs.error(code_messages.cannot_withdraw_this_value);
            throw new Error();
        }
    }

    protected validateDeposit(value: number) {
        if(this.math.isNegative(value)) {
            this.logs.error(code_messages.negative_value_for_deposit);
            throw new Error();
        }
    }
} 