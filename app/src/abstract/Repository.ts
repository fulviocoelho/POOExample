import IOptions from "../interfaces/IOptions";
import Logs from "../usefull/Logs";
import Database from "./Database";

export default class Repository {

    protected database: Database;
    protected logs: Logs;

    constructor({ database, usefull }: IOptions){
        this.database = database;
        this.logs = usefull.createLogs();
    }

}