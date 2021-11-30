import account_types from "../../constants/AccountTypes";
import IAccountInfo from "../../interfaces/IAccountInfo";
import IDatabaseInfo from "../../interfaces/IDatabaseInfo";
import UsefullFactory from "../../factory/UsefullFactory";
import ILogs from "../../interfaces/ILogs";
import data from "../Data/data";

export default class MongoDBDriver {
    protected pass: string;
    protected user: string;
    protected host: string;
    protected logs: ILogs;
    protected table: string = '';

    constructor({ user, pass, host }: IDatabaseInfo) {
        this.user = user;
        this.pass = pass;
        this.host = host;
        this.logs = new UsefullFactory().createLogs();
    }

    public connect(): void {
        this.logs.info(`Connected on ${this.host} with ${this.user} user using ${this.pass} as password`)
    }

    public colection(table_name: string): MongoDBDriver {
        this.logs.info(`On ${table_name}`);
        this.table = table_name
        return this;
    }

    public putItem(document: object): void {
        this.logs.info(`Put new document: ${document}`);
    }

    public getItem(document: object): any {
        this.logs.info(`Get data with: ${document}`);

        const { client_table, account_table } = data;
        const { client_id } = document as { client_id: string };

        let query_result;

        if(this.table === 'account_table') {
            query_result = account_table.filter(item => item.client_id === client_id)
        } else if (this.table === 'client_table') {
            query_result = client_table.filter(item => item.client_id === client_id)
        }

        return query_result;
    }

    public updateItem(document: object): void {
        this.logs.info(`Update following document: ${document}`);
    }

    public deleteItem(document: object): void {
        this.logs.info(`Delete this document: ${document}`);
    }
}