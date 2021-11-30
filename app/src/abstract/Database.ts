import UsefullFactory from '../factory/UsefullFactory';
import IDatabaseInfo from '../interfaces/IDatabaseInfo';
import ILogs from '../interfaces/ILogs';

export default abstract class Database {
    protected user: string;
    protected pass: string;
    protected host: string;
    protected logs: ILogs;

    constructor({user, pass, host}: IDatabaseInfo, usefull: UsefullFactory = new UsefullFactory()){
        this.user = user;
        this.host = host;
        this.pass = pass;
        this.logs = usefull.createLogs();
    }

    public abstract fetch (table_name: string, objeto: object): unknown
    public abstract insert (table_name: string, objeto: object): unknown
    public abstract update (table_name: string, objeto: object): unknown
    public abstract delete (table_name: string, objeto: object): unknown
}