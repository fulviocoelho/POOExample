import IClientInfo from "../interfaces/IClientInfo";
import AccountFactory from "../factory/AccountFactory";
import IOptions from "../interfaces/IOptions";
import Account from "./Account";

export default class Client {
    protected client_id: string;
    protected first_name: string;
    protected last_name: string;
    protected age: number;
    protected _account: Account;

    constructor(
            { client_id, first_name, last_name, age }: IClientInfo, 
            { database, usefull, accountFactory = new AccountFactory(client_id, { database, usefull }) }: IOptions
        ) {
        this.client_id = client_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this._account = accountFactory.create();
    }

    public fullName(): string {
        return `${this.first_name} ${this.last_name}`;
    }

    public deposit(value: number): void {
        this._account.deposit(value);
    }

    public withdraw(value: number): void {
        this._account.withdraw(value);
    }

    public getBalance(): number {
        return this._account.balance;
    }
}