import MongoDB from '../repository/MongoDB';
import IDatabaseInfo from '../interfaces/IDatabaseInfo';
import Database from '../abstract/Database';

class teste {}

export default class DatabaseFactory {
    private database: MongoDB;

    constructor(connection_info: IDatabaseInfo, database: MongoDB = new MongoDB(connection_info)){
        this.database = database;
        this.database.connect();
        
        return this;
    }
    
    create(): Database {
        return this.database;
    }
}