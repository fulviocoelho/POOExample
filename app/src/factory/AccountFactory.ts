import IAccountInfo from "../interfaces/IAccountInfo";
import account_type from '../constants/AccountTypes';
import CheckingAccount from '../business/CheckingAccount'
import SavingsAccount from '../business/SavingsAccount'
import UsefullFactory from "./UsefullFactory";
import code_messages from "../constants/CodeMessages";
import ILogs from "../interfaces/ILogs";
import Account from "../abstract/Account";
import AccountRepository from "../repository/AccountRepository";
import IOptions from "../interfaces/IOptions";

export default class AccountFactory {
    private account_type: number;
    private account_info: IAccountInfo;
    private options: IOptions;
    private logs: ILogs;

    constructor(client_id: string, { database, usefull = new UsefullFactory(), repository = new AccountRepository({database, usefull}) }: IOptions) {
        this.logs = usefull.createLogs();

        if(!(repository instanceof AccountRepository)){
            this.logs.error(code_messages.repository_is_not_account_repository);
            throw new Error();
        }

        const { account_type, balance, account_number }: IAccountInfo = repository.getAccountInfo(client_id);

        this.account_type = account_type;
        this.account_info = { client_id, account_type, balance, account_number };
        this.options = { database, usefull };

        return this;
    }

    public create(): Account {
        switch (this.account_type) {
            case account_type.checkings : return new CheckingAccount(this.account_info, this.options);
            case account_type.savings : return new SavingsAccount(this.account_info, this.options);
            default: this.logs.error(code_messages.no_such_account_type); throw new Error();
        }
    }
}

